
// Add a fake generator which accepts arrays of functions
// to interface with a-slides on platofrms which don't support
// generators
window.FakeGenerator = function FakeGenerator(arr) {
	return function () {
		var toRun = arr.slice();
		var done = false;
		var self = this;
		return {
			done: false,
			next: function (arg) {
				if (done || !toRun.length) return {
					value: undefined,
					done: true
				};
				if (toRun.length === 1) done = true;
				return {
					done: done,
					value: toRun.shift().bind(self)(arg)
				}
			}
		}
	}
}

window.setDynamicSlide = function (o) {
	window.aSlidesSlideData[window.getSlideName(document.currentScript)] = o;
}

/**
 * Define some useful presetup generators
 */
window.iframeSlide = {
	setup: function () {
		var iframe = this.querySelector('iframe');
		iframe.src = iframe.dataset.src;
	},
	action: window.FakeGenerator([ function() {} ]),
	teardown: function () { this.querySelector('iframe').src = 'about:blank'; }
};

window.playVideo = {
	setup: function () {
		this.querySelector('video').currentTime=0;
		this.querySelector('video').pause();
	},
	action: window.FakeGenerator([ function() {
		this.querySelector('video').play();
	}]),
	teardown: function () {
		this.querySelector('video').pause();
	}
}

window.elByEl = function () {

	var children;
	var clone;

	function replaceWithEl(el, target) {
		target.innerHTML = '';
		target.appendChild(el);
	}

	var out = {};
	var setUpFirstEl;

	function init() {
		children = Array.from(this.children);
		var target = this;
		clone = children.map(function (el) {
			return function () { replaceWithEl(el, this) };
		}.bind(this));
		if (!clone.length) throw Error('Empty elByEl target');
		setUpFirstEl = clone.shift();
		clone.unshift(function () {});
		clone.push(function () {});
		out.action = window.FakeGenerator(clone);
	}

	out.teardown = out.setup = function () {
		if (!children) init.bind(this)();
		this.innerHTML = '';
		setUpFirstEl.bind(this)();
	};

	return out;
};

window.getSlideName = function (el) {
	var name;
	if (el.matches('script[id]')) {
		name = genId(el.id);
	} else {
		var hs = prevAll(el).filter(function (el) {
			return el.tagName.match(/h[0-6]/i);
		});
		if (!hs.length) throw 'No h to find';
		var h = hs[hs.length - 1];
		name =  genId(h.textContent);
	}
	return 'slide-' + name;
}

// Uses ES2015 Generators
window.contentSlide = function (slides) {
	var oldContent;

	return {
		setup: function setup() {
			oldContent = Array.from(this.children);
		},
		action: function* () {

			const t = slides.slice();

			if (t.length === 0) {
				yield;
				return;
			}

			while(t.length) {

				this.empty();
				let i = t.shift();
				if (i) {
					switch(Object.keys(i)[0]) {
						case 'video':
							this.innerHTML = `<video src="${i.video}" preload autoplay autostart loop style="object-fit: contain; flex: 1 0;" />`;
							this.querySelector('video').currentTime=0;
							this.querySelector('video').play();
							break;
						case 'image':
							this.innerHTML = `<image src="${i.image}" />`;
							break;
						case 'markdown':
							this.addMarkdown(i.markdown);
							break;
						case 'html':
							this.innerHTML = i.html;
							break;
						case 'iframe':
							this.innerHTML = `<iframe src="${i.iframe}" frameborder="none" style="flex: 1 0;" /></iframe>`;
							break;
					}
					if (i.caption) {
						this.addMarkdown(i.caption);
					}
					if (i.url  || i.iframe) {
						this.addHTML(`<div class="slide-url">${i.url || i.iframe || ''}</div>`);
					}
				}
				yield;
			}
		},
		teardown() {
			if (oldContent) {
				this.empty();
				oldContent.forEach(c => this.appendChild(c));
			}
		}
	};
};