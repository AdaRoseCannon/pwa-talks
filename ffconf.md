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

## Lovely Web Features

> ## WHO HERE LOVES THE WEB?!
>
> * Low Barrier to Entry to get started making
> * Can load new content fast!
> * Deep linking and URL Sharing
> * Responsive so works across many devices
> * Accessible so works for many people
> * Can be reformatted so that it works on new devices.
> * Content is not locked to a particular platform
> * Content is equally available around the world
> * User Security and Privacy have a high priority

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