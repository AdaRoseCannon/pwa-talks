---
layout: post
title: Building Web Apps
description:  Building apps in the web for increased reach and conversions. - presented at Women Hack for Non-profits
script: https://cdn.rawgit.com/AdaRoseEdwards/dirty-dom/v1.3.1/build/dirty-dom-lib.min.js
---

# {{page.title}}

<!-- Link to trigger conversion script -->
[Convert to Slide Deck](#aslides)

## About me

I am ...

Why do I like progressive web apps as a developer...

<!-- This slide uses information from _config.yml -->
<blockquote class="dark" id="splash-slide" style="background-image: url('images/bird1.jpg');">
<h1>{{ page.title }}</h1>
<h3>{{ page.description }}</h3>
<h2>{{site.author.name}} - {{site.author.company}}</h2>
</blockquote>

## Is a progressive web app right for you?

* Do you need
* Ideal use cases: Documents, media streaming, retail (mention web payment apis), communication, security and trust (many eyes looking at it), low-mid end gaming, VR, need easy sharing i.e. trying to go viral.

## When may a web app not be the best route?

* Do you need access to low level device apis not available through the web.
  * High End gaming
  * Bluetooth
  *
* Do you need to circumvent the web's security model. For your user's sake I hope not.
  * The web platform tries to resist tracking and privacy issues. Why do you think facebook would rather you be in the app than the web.

## As a developer

Take advantage of the web's built in security and privacy powers, increase sharing and engagement, deploy in seconds rather than hours, strong developer eco system.

## What goes into a web app

* points from article

## Buzzwords

* Responsive Design
* Offline First
* Progressive Enhancement

## Role of a web app

An ideal web app fulfills the role of your responsive website as well as being your presence on the user's homescreen without having the overhead of an app store.

<blockquote class="dark" id="splash-slide" style="background-image: url('images/bird2.jpg');">
<h1>Is a Web App right for you?</h1>
<h2>(It probably is)</h2>
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