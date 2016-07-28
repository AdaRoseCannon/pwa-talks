---
layout: post
title: Readme
description: Building a slide deck from a single page
image: https://ada.is/progressive-web-apps-talk/images/FinancialTimes_G-FTUS_Balloon_LordMayorsAppeal.jpg
script: https://cdn.rawgit.com/AdaRoseEdwards/dirty-dom/v1.3.1/build/dirty-dom-lib.min.js
---

<!-- Define slide animation generators -->

<!-- contents -->

# README


This is a little layout for blog posts which can turn into slides using a-slides

<!-- Link to trigger conversion script -->
[Convert to Slide Deck](#aslides)

## Set up

```bash
sudo apt-get install bundler zlib1g-dev libxml2-dev
bundle install
bundle exec jekyll serve
```

## About

This is useful for creating a blog post which is also a slide deck.

Each slide is a block quote

All the content before a slide appears as the notes for that slide.

## Controls

It should work with slide remotes and a wii mote on supported platforms

* Click, Return or right key to Advance
* Left Key to go back
* f to toggle fullscreen
* If you hae multiple tabs open (in a broser which supports a service worker), press parent in the control bar and it will control all the other tabs

<!-- This slide uses information from _config.yml -->
<blockquote class="dark" id="splash-slide" style="background-image: url('images/pattern.svg');">
<h1>{{ site.name }}</h1>
<h3>{{ site.description }}</h3>
<h2>{{site.author.name}} - {{site.author.company}}</h2>
</blockquote>

Block quotes can also be defined short hand as well
> # Content Goes Here
> Demo slide
>
> ```markdown
> > # Content Goes Here
> > Demo Slide
> >
> > ```markdown
> > > # Content Goes Here
> > > Demo Slide
> > ```
> ```

# This h1 is what defines the slide name

* Animations are defined as generators, when the yeild whenever you are awaiting an input from the presenter.
* setup is run and action are run when the slide is being moved into position.
* action's next() is called repeatedly with each input.
* teardown() is called after the slide has been hidden
* pressing back will run teardown() and reinitialise action()
* for a complex example see: https://github.com/AdaRoseEdwards/progressive-web-apps-talk/blob/gh-pages/scripts/content/LoaPN.js

>```javascript
window.aSlidesSlideData = {'slide-this-h1-is-what-defines-the-slide-name': {
	setup() {},
	action: function *() {
		this.appendChild(window.MAKE.markdown('# Hello'));
		yield;
		this.appendChild(window.MAKE.markdown('# World'));
		yield;
	},
	teardown() {
		this.innerHTML = '';
	}
}}
>```

# Demo

<script>
	window.aSlidesSlideData['slide-demo'] = {
		setup: function () {
			this.innerHTML = '';
		},

		// action: function *() {
		// 	this.addMarkdown('# Hello');
		// 	yield;
		// 	this.addMarkdown('# World');
		// 	yield;
		//	return;
		// },
		//
		// This fake generator is an a-slides compatible
		// es5 shim, from post-to-slides.js
		action: window.FakeGenerator([
			function() {this.addMarkdown('# Hello');},
			function() {this.addMarkdown('# World');},
			function() {this.addMarkdown('## - From Ada');},
			function() {},
		]),
		teardown: function () {
			this.innerHTML = '';
		}
	};
</script>
> This content gets removed