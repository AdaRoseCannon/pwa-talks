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
	'styles/bird.css',
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

<!-- This slide uses information from _config.yml -->
<blockquote style="background-image: url(&quot;images/lighthouse.jpg&quot;); display: block;">
<h1 id="building-web-apps-1">Building Web Apps</h1>
<img src="https://cdn.rawgit.com/alrra/browser-logos/1641cc3d/src/samsung-internet/samsung-internet.svg" alt="Samsung Internet Logo" style="width: 9em; float: right;">
<h3 id="what-the-web-can-bring-to-apps">What the web can bring to Apps</h3>
<h2 id="ada-rose-edwards---samsung-research-uk">Ada Rose Edwards - Samsung Research UK</h2>
<h2 id="ladyadaking-samsunginternet">@lady_ada_king, @samsunginternet</h2>
<span class="slide-view-button"> View Slide</span></blockquote>



<!-- This slide uses information from _config.yml -->
<script>window._setNextSlide(window.playVideo);</script>
<blockquote class="dark">
<h1>A quick example of a web app:</h1>
<p>
<video src="images/add-to-homescreen.mp4" autoplay="true" muted></video>
</p>
</blockquote>


> # Increases Engagement
>
> <img src="images/leaving-export.png" style="filter: drop-shadow(0 0 1em rgba(0,0,0,0.4));" />

<!-- This slide uses information from _config.yml -->
> <blockquote style="position: absolute; background: linear-gradient(to bottom, rgba(47,79,79,1) 10%, rgba(47,79,79,0.5) 100%); padding-bottom: 2em; text-shadow: 0 0 0.3em darkslategrey;">
> <p>(Left) Poster showing how to download an events app; and (right) how it could have looked if they used a website instead.</p>
> <p>– Peter Gasston‏ (@stopsatgreen)</p>
> </blockquote>
>
> ![How it could have been](images/sign.jpg)


> <div style="display: flex;">
> <div style="text-align: left;">
> <h1>Cool Web Features</h1>
> <ul style="list-style-type: none;">
> <li>Instant Engagement</li>
> <li>World Wide</li>
> <li>Safe for users</li>
> <li>Instant Deploy</li>
> <li>Access via URLs</li>
> <li>Accessibility</li>
> </ul>
> </div>
> <div style="text-align: right;">
> <h1>Cool App Features</h1>
> <ul style="list-style-type: none;">
> <li>Works Offline</li>
> <li>Push Notifications</li>
> <li>Background Sync</li>
> <li>Icon on the Homescreen</li>
> <li>No URL Bar</li>
> <li>Not constrained to browser</li>
> <li></li>
> </ul>
> </div>
> </div>


> <img src="images/ft-news.png" />

> <img src="https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/images/add-to-home-screen.gif" alt="install banner gif"/>

<script>_setNextSlide(elByEl());</script>
> <div>
> <h1>How do you define an App?</h1>
> <h1 style="text-align: right;">It's in an App Store.</h1>
> </div>
> <div>
> <h1>How do you define a Web Site?</h1>
> <h1 style="text-align: right;">It's in the browser.</h1>
> </div>
> <div>
> <h1>How do you define a Web App?</h1>
> <h1 style="text-align: right;">Uhhh.....</h1>
> </div>

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
* Web Payment
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

> * https (http2 for better speed)
> * service Workers
> * web app manifest
>
> Google's Lighthouse will test your app for how well it behaves like an app to rate it out of hundred to help you find anythign you missed

* Describe what a service worker is

* Describe how to set it up

> ![The web as you know it today.](images/the-pwa-web1.svg)
>
> ![Apps can be show outside of a browser context](images/the-pwa-web2.svg)
>
> ![Service Workers can intercept network requests](images/the-pwa-web3.svg)
>
> ![Push notifications allow us to almost discard the front end entirely](images/the-pwa-web4.svg)
> What is a service worker
> # Setting up A Service Worker
> JavaScript
> HTML

> # Setting up Push Notifications

# Useful Patterns

These are just tools, you don't have to stick to them rigidly.

If you are already producing apps in a way that works for you and your customers stick with it.

The Goals of these patterns are to get users engaged early, keep them engaged during that first session and to keep them coming back

# PRPL

Pattern for routing and precaching.

The goal is to have a fast first load to avoid users on slow conneections giving up.

Then have future loads happen almost instantaenously and have some even work when there is no connection.

<ol style="font-size: 1.5em;" class="prpl">
<li>Push critical resources for the initial route.</li>
<li>Render initial route.</li>
<li>Pre-cache remaining routes.</li>
<li>Lazy-load and create remaining routes on demand.</li>
</ol>

# Web App Shell Model

Shares many similarities with PRPL

With a focus on seperating the app from the content.

So that when the network fails the whole app works even if some of the content cannot be fetched.

Pattern for content caching and what to prioritise.

Send down pre-rendered first load,

Long cache resources for the Application Shell

If following the PRPL pattern then you can start precaching some future content.

# Headless Web

To me this is one of the more revolutionary patterns.

You perform most of your user interactions via push notifications.

Minimising drain on users attention, be useful and timely but not intrusive.

Become an invaluable part of their phone experience and they will keep coming back.

## Good Push Notifications

The overarching theme here is: Inform the user, show them they have control.

When to ask for permission, give context clues. Don't expect the user to trust you.

Say what you are going to use them for and make it clear where they can reduce their notifications.


Push notifications need to be timely. Don't alert for something that does not need immediate attention.

Allow the user to not open your app.

A "yes or no" answer can be done in the notification itself!





> # Web App Patterns
>
> PRPL
>
> Web App Shell Model
>
> Headless Web
>
> Graph of when push notifications get ignored
>
> Slack's Notification flow chart.

<script>

	// Add links to deep link into slides
	var blockquote = Array.from(document.querySelectorAll('body > blockquote'));
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