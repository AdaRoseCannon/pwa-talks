---
layout: post
title: Progressive Web Apps
description: Keeping the web in Web Apps
---

# {{page.title}}

<!-- Link to trigger conversion script -->
[Convert to Slide Deck](#aslides)

Abstract: With new web technologies enabling a new generation of install-able app-like websites it is important to ensure the web carries on working for everyone. This talk will discuss the P in PWA, progressive web apps should work for everyone and should not let their app-like approach divorce them from the web.

<!-- This slide uses information from _config.yml -->
<blockquote class="dark" style="background-image: url('images/bird1.jpg');">
<h1>{{ page.title }}</h1>
<h3>{{ page.description }}</h3>
<h2>{{site.author.name}} - {{site.author.company}}
<br />
@lady_ada_king, @samsunginternet
</h2>
</blockquote>

## A quick example install of a Web App

I am going to make the assumption that everyone who managed to get tickets to FFConf keeps their ear to the ground WRT the web.

*Quick show of hands who here thinks they have a pretty good idea what a progressive web app is?*

A progressive web app at it's heart is a website.

That website is usually designed to appear native like.

The website will take advantage of new web platform features when they are available.

These features enable native like functionality such as working offline and push notifications.

<!-- This slide uses information from _config.yml -->
<script>window.setDynamicSlide(window.playVideo);</script>
<blockquote class="dark">
<h1>A quick example of a web app:</h1>
<video src="images/add-to-homescreen.m4v" autoplay="true" muted></video>
</blockquote>

We must learn to accept that not all web platform features are available everywhere.

As much as we would love to give every user the same experience new browser features are not available everywhere yet.

That is okay.

<blockquote class="dark" style="background-image: url('images/bird2.jpg');">
<h1><i>The future is already here — it&#x27;s just not very evenly distributed.</i> - William Gibson</h1>
</blockquote>

## Web is declarative

The web is designed to be declarative.

It is designed to be interpreted depending on the platform.

*SpaceJam*

This is what allows websites written years ago work on devices which never existed at the time.

There are many other benefits to being web like which the current trend of reimplementing the browser's capabilities in JavaScript is throwing away.

<script>window.setDynamicSlide(window.elByEl());</script>
<blockquote class="dark" style="background-image: url('images/bird9.jpg');">
<h1 style="text-align: center;">Declarative VS Programmatic</h1>
<p><img src="images/spacejam.png" /></p>
</blockquote>

## The web is based on Standards

The web is based on agreed upon standards this both a strength and a weakness.

The weakness is that new practises and technology take a long time to reach the web.

This is because each standard is often hotly debated to ensure that is is:

* security
* privacy
* accessibility
* extensibility
* implementability
* performance

This weakness becomes it's strength in the long term:

Years down the line this usually pays off as it maintains some of the fundamental goals of the web:

<script>window.setDynamicSlide(window.elByEl());</script>
<blockquote class="dark" style="background-image: url('images/bird10.jpg');">
<h1 style="text-align: center;">The web is based on Standards</h1>
<h1><span style="color: skyblue;">Feature?</span><span style="float: right; color: pink;">Security!</span></h1>
<h1><span style="color: skyblue;">Feature?</span><span style="float: right; color: pink;">Privacy!</span></h1>
<h1><span style="color: skyblue;">Feature?</span><span style="float: right; color: pink;">Accessibility!</span></h1>
<h1><span style="color: skyblue;">Feature?</span><span style="float: right; color: pink;">Extensibility!</span></h1>
<h1><span style="color: skyblue;">Feature?</span><span style="float: right; color: pink;">Implementability!</span></h1>
<h1><span style="color: skyblue;">Feature?</span><span style="float: right; color: pink;">Performance!</span></h1>
</blockquote>

## Lovely Web Features

* The web is designed so that sites can be made without specialised knowlege of specific platforms.
* It's designed to be fast on low performance devices.
 * Animates fast
 * Start fast
* Can be interpreted to work anywhere
 * Desktop Computers
 * TVs
 * Phones
 * Screen Readers
 * Braille display
 * Virtual Reality
 * Terminals
* More accessible to a very wide audience
* Content is not locked to a single manufacturers product
* Content is usually available equally anywhere in the world.
* Security and Privacy have extremely high priority as it is a huge attack target.
* Designed to work now and in many years, we don't break the web. Very few APIs get deprecated. `<blink>` :tear:
* It is also extensible so if you want you can throw all that loveliness away and rebuild the web platform in JavaScript. :trashcan:


> * Low Barrier to Entry to get started making
> * Can load new content fast!
> * Deep linking and URL Sharing
> * Responsive so works across many devices
> * Accessible so works for many people
> * Can be reformatted so that it works on new devices.
> * Content is not locked to a particular platform
> * Content is equally available around the world
> * User Security and Privacy have a high priority
> * Reliable across many years
> * Extensible so that you can throw it all away do it yourself.

## What about native apps?

Last week I was speaking at Moz Fest and we asked the audience for what they loved most about native platforms on iOS and Android

Here were their responses:

* Blah....

Today I would like to show many of you how these native-like features are no longer tied to native platform

And are available to use to build apps in the web today.

Allowing you to have your cake and eat it too!!

<blockquote class="dark">
<h1>What about native apps?</h1>
<p><img src="images/native-responses.jpg"></img></p>
</blockquote>

> # Attributions
> * Mocking Bird Argument - https://commons.wikimedia.org/wiki/File:Mocking_Bird_Argument.jpg?uselang=en-gb

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