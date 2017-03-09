---
layout: post
title: Building Web Apps
description: What the web can bring to Apps
scripts: [
	'scripts/post-to-slides.js',
	'scripts/slide-utils.js',
	'scripts/third-party/dirty-dom-lib.min.js',
]
styles: [
	'scripts/third-party/a-slides.css',
]
---

# {{page.title}}

<!-- Link to trigger conversion script -->
[Convert to Slide Deck](#aslides)

I am Ada Rose from Samsung Internet Developer Relations I am here to talk to you about Web Apps. Can I have a quick show of hands:

I am here today to talk about web apps

Web Apps are websites which are so good your users will want to save them to their home screen.

They can be installed like apps.

Chrome will even produce an APK

Browsers will notify the users that they can be installed.

* Who here is a web developer?
* Who here develops native apps?

I am aiming this talk at everyone as good web app requires thoughts from both.

<script>window.setDynamicSlide(window.elByEl());</script>

<!-- This slide uses information from _config.yml -->
<blockquote class="dark" style="background-image: url('images/bird1.jpg');">
<div>
<h1>{{ page.title }}</h1>
<h3>{{ page.description }}</h3>
<h2>{{site.author.name}} - {{site.author.company}}
<br />
@lady_ada_king, @samsunginternet
</h2>
</div>
<div>
<h1>Samsung Internet</h1>
<p>
<img src="https://pbs.twimg.com/profile_images/787926197971935232/-0aIDbJ3.jpg" style="border-radius: 10%;" />
</p>
</div>
</blockquote>

## A quick example install of a Web App


<!-- This slide uses information from _config.yml -->
<script>window.setDynamicSlide(window.playVideo);</script>
<blockquote class="dark">
<h1>A quick example of a web app:</h1>
<video src="images/add-to-homescreen.m4v" autoplay="true" muted></video>
</blockquote>


Web Apps provide many advantages:

* By Pass the App Store
* Seamless install
* The user installs the web app without leaving the page
* Much cheaper
* Maintain multiple platforms with a single product.

> # Why Would You want to?
> Graph of user drop offs per click

If you have concerns about whether the Web has the features you need the web platform has:

* Offline support
* Push Notifications
* Background Sync
* WebGL
* P2P Messaging
* A myriad of other APIs for working with audio streams

Future APIs

* Web Bluetooth
* Web USB


Unfortunately the future is not evenly distribted

* Chrome, Firefox and Samsung Internet have great support for the core features that go into a Progressive Web App
* Safari hasn't been focusing on Web Apps in recent years but have implememnted Promises and Fetch the first steps needed for Service Workers

Safari can run offline using an old browser feature called App Cache but it has a frustrating API and not recommended.

If you require push notifications on iOS Safari then you will need to use a wrapper like Cordova and ship a native app.

> Does the web have the features I need?
> Is serviceworker ready yet?

If you are going down the route of getting a web site on a user's homescreen what do you need to do?

Nothing, any website can be added to the homescreen manually

Icons can be defined in the head and this will work everywhere

But we want that sweet prompt and the ambient badging

You need:

> * https
> * service Workers
> * web app manifest
>
> Google's Lighthouse will test your app for how well it behaves like an app to rate it out of hundred to help you find anythign you missed

> # Setting up A Service Worker

> # Setting up Push Notifications

> # Responsive Design

<script>

	// Add links to deep link into slides
	var blockquote = Array.from(document.querySelectorAll('blockquote'));
	var newSpans = [];
	document.querySelector('a[href="#aslides"]').addEventListener('click', function () {
		newSpans.forEach(function (s) {
			s.removeEventListener('click', onclick);
			s.remove();
		});
		newSpans.splice(0);
	});
	blockquote.forEach(function (el) {
		var span = document.createElement('span');
		newSpans.push(span);
		span.textContent = ' View Slide';
		span.addEventListener('click', function onclick() {
			window.removeHashChangeEventListener();
			newSpans.forEach(function (s) {
				s.removeEventListener('click', onclick);
				s.remove();
			});
			init().then(function () {
				document.querySelector('.a-slides_slide-container').dispatchEvent(new CustomEvent('a-slides_goto-slide', {detail: {slide: el.parentNode}}));
			});
		});
		span.setAttribute('class', 'slide-view-button');
		el.appendChild(span);
	});
</script>