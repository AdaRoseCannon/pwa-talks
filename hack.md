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

## Role of a web app

An ideal web app fulfills the role of your responsive website as well as being your presence on the user's homescreen.

You don't have the appstore getting in the way between your initial web presence and getting on the homescreen.

## Buzzwords

* Responsive Design
* Offline First
* Progressive Enhancement

<!-- This slide uses information from _config.yml -->
<blockquote class="dark" id="splash-slide" style="background-image: url('images/bird1.jpg');">
<h1>What is a progressive web app?</h1>
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

<blockquote class="dark" id="splash-slide" style="background-image: url('images/bird2.jpg');">
<h1>Is a Web App right for you?</h1>
<h2>(It probably is)</h2>
</blockquote>

## What goes into a web app

The best practises for web apps are a combination of the best practises for the web and the best practises for native apps.

## Responsive Design
Been doing it for years but remember

* Mobile First
* No horizontal scrolling
* Allow zooming in for accessiblity
* must still work on the desktop

## Offline First
* local databases e.g. idb -> pouch for syncing
* service workers

## Progressive Enhancement

Not all app-like features are supported by all browsers it is up to you to decide what is important and what is not.

* Work out minimum functionality and 'must have' features
* Decide how to support them, provide a polyfill, a fallback, no feature or deny that user any content.
* Long tail of the web so more work less gain

E.g. For Podle the base functionality is searching for and playing podcasts.
This can be accomplished with just HTML forms and links. So that is my base functionality.

I provide some progressive enhancements (stats for the UK from caniuse)

* If indexeddb is supported I store their preferences (93.8% of users)
* If service workers are supported they can go offline (58.1% of users)
* If push notifications are supported they can recieve push notifications when their podcasts update (52.59% of users)
* If the audio element is supported they can play inline (96.85% of users)
* If they have flexbox support they get a nicer layout (93.21% of users)

None of these experiences are essential to the podcast experience but are enhancements.

It is okay for a user on iOS Safari because although there is no service worker so no offline or push notifications they still get a great experience regardless.

* Not all browsers support push notifications that is okay
* Not all browsers support service workers that is okay


## Accessible
* Take advantage of the webs accessiblity by building syntactically

<blockquote class="dark" id="splash-slide" style="background-image: url('images/bird2.jpg');">
<h1>What goes into a web app?</h1>
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