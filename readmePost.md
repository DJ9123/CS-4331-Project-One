---


---

<h1 id="domingo-cook---cs-4331-hci-project-one">Domingo Cook - CS 4331 HCI: Project One</h1>
<h2 id="project-link">Project Link</h2>
<p><a href="https://dj9123.github.io/p1DomingoCook/">HCI: Project One Report</a></p>
<h2 id="project-overview">Project Overview</h2>
<p>Common uses:</p>
<ul>
<li>
<p>Microwaving food for x number of minutes</p>
</li>
<li>
<p>Setting a timer for x number of minutes</p>
</li>
</ul>
<p>Sequence of actions:</p>
<ol>
<li>
<p>(optional) Press timer button</p>
</li>
<li>
<p>Enter selected time or press +30 seconds</p>
</li>
</ol>
<p>How does the user know what to do?:</p>
<ul>
<li>
<p>Text is displayed for most buttons that contain shortcuts</p>
</li>
<li>
<p>Labels surround button groups for combined uses (e.g. “Express cook”)</p>
</li>
</ul>
<p>How does the microwave provide feedback to the user?</p>
<ul>
<li>
<p>Sounds each time a button is pressed</p>
</li>
<li>
<p>Sounds when timer/microwave is completed</p>
</li>
<li>
<p>Seven segment display for remaining time or messages</p>
</li>
</ul>
<p>Common mistakes:</p>
<ul>
<li>
<p>Too many buttons that never get used</p>
</li>
<li>
<p>Hidden sequences the user might not find</p>
</li>
<li>
<p>Buttons may take too long to press</p>
</li>
</ul>
<hr>
<h2 id="issues-with-my-microwave">Issues with My Microwave</h2>
<p><img src="https://i.imgur.com/2EfoaSO.gif" alt="Image of real microwave"></p>
<h3 id="timer">Timer</h3>
<p>The digital display is a standard seven segment display. This can cause issues for the</p>
<p>user if they have issues reading the represented symbols. Additionally, not many symbols</p>
<p>outside of numbers can be created with this display. The developer has to be creative</p>
<p>for choosing how words/acronyms are displayed which can further confuse or be unclear to</p>
<p>the user.</p>
<h3 id="quick-access">Quick access</h3>
<p>The power level for my microwave is at a static level unless specifically changed through</p>
<p>the user interface. However, this value is reset for each instance the microwave is in</p>
<p>use. Some users may prefer having it in a “settings” style where the power level is</p>
<p>stored across sessions.</p>
<p>While my microwave gives several options for heating food, I either use the +30 seconds</p>
<p>button or the 1-6 minute express cook buttons. These extra buttons can distract the user</p>
<p>when looking for buttons often used like kitchen timer or power level.</p>
<h3 id="accessibility">Accessibility</h3>
<p>Occasionally, I need to open the microwave door while my hands are full. A button for</p>
<p>quickly opening the microwave can help users who have the same issue.</p>
<p>All of the buttons on the microwave are the same color. Outside of the few that are</p>
<p>within a color group, most of the buttons look very similar. Additionally, the number of</p>
<p>buttons on the microwave make the interface too crowded and therefore the text for each</p>
<p>button is very small.</p>
<hr>
<h2 id="plans-for-fixing-microwave">Plans for Fixing Microwave</h2>
<p><img src="https://i.imgur.com/zJlRzT9.png" alt="Image of microwave design"></p>
<h3 id="timer-1">Timer</h3>
<p>Increase screen resolution:</p>
<ul>
<li>
<p>Helps the user quickly read important information</p>
</li>
<li>
<p>Add support for other language settings</p>
</li>
<li>
<p>Add additional info (power level)</p>
</li>
</ul>
<h3 id="quick-access-1">Quick access</h3>
<p>Toggle for adjusting power level:</p>
<ul>
<li>
<p>Options: [low, medium, high]</p>
</li>
<li>
<p>Displayed next to timer at all times</p>
</li>
</ul>
<p>Slide in circular motion to quickly set times and simplify design</p>
<p>Large, centered Stop/Clear button at bottom</p>
<h3 id="accessibility-1">Accessibility</h3>
<p>A button will be added to open the door. This button shall be large enough for the user</p>
<p>to bump with their elbow or side of their hand.</p>
<p>The Stop/Clear button will be colored differently than all other buttons. Only Power,</p>
<p>Timer, Open Door, and Stop/Pause buttons will be included in the design.</p>

