# MOSAICON
Mosaicon is an AngularJS app integrated with Google Firebase, built as UI prototype of Mosaicon social network. It is a SoNet2017 project at "Politecnico di Torino".
<br/>Further info and details about the project at https://sonet-2017.github.io/MOSAICON/.

<h2>Get started</h2>
Fork this GitHub project to yours or download and import it in your JavaScript IDE. Compile the index.html and try the app.
<br/>The user interface is designed specifically for iPhone 6. With Google Chrome and its Developer Tools, you can set the actual interface model.

<h2>Demo</h2>
The demo view is a past event page with a innovative mediaplayer.
<br/>In the middle of the view you get the info of the event.
<br/>Video and audio files are different sources, but synced together. Videos underneath the main player are different point of view of the same event, contained in a modal slideshow. When you play them, the players jump to a specific synced time of the tracks (audio and video). Three players are synced together at the same time.
<br/>Above the audio player there is a gallery of pictures of the event that scrolls horizontally. You can upload your own picture (thanks to Firebase server) and tell your experience or view other users' pictures in a modal that scrolls vertically.

<h2>Navigation</h2>
The menu is a typical social network app menu.
<br/>In the top bar, videocamera and chat icons, are disabled. The bottom bar got 5 icons to navigate to Finder, Timeline, On Air, Passport and Floor that stand for Search, Calendar, Home, Profile and Map.

<h2>Available features</h2>
<div>
<ul>

<li>
<p>Register an account, Login and Logout</p>
</li>

<li>
<p>Edit your profile information</p>
</li>

<li>
<p>Check for events near you (GMaps)</p>
</li>

<li>
<p>Enjoy a HQ video/audio recap of a past techno party from synced multiple views of the party</p>
</li>

<li>
<p>Take a look at other people's pictures about that night, like/unlike it</p>
</li>

<li>
<p>Upload your own content</p>
</li>

<li>
<p>Check for events on a specific date</p>
</li>

<li>
<p>Filter the site content in order to find other users or events</p>
</li>



</ul>


</div>

<h2>Third-party components</h2>

<div>
<ul>

<li>
<p>Google Firebase - AngularFire</p>
</li>

<li>
<p>Google Maps - ng-map</p>
</li>

<li>
<p>Videogular: <a href="http://www.videogular.com/">http://www.videogular.com/</a></p>
</li>

<li>
<p>Twitter Bootstrap</p>
</li>

<li>
<p>moment.js</p>
</li>

<li>
<p>CSS/LESS</p>
</li>

</ul>

</div>

<h2>Limitations</h2>

<div>

<ul>

<li>
<p>When searching for an event by date, the <strong>calendar</strong> template (found online) doesn't permit to click on
past dates. For simplicity purposes, all the events are scheduled on July 31th and just one contains the whole
media content uploaded by users ("NotteTechno III", eventId = 0).</p>
</li>

<li>
<p>In the passport and external passport view is possibile to see where the user is located, and pictures uploaded by that user; actually the content is relative to just one event ("NotteTechno III", eventId = 0).</p>
</li>


</ul>


</div>
