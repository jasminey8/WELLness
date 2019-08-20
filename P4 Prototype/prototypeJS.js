/*
FILE NAME: targets.js
WRITTEN BY: Jasmine Yuan
DATE: 4/9/19
PURPOSE: CS220 P4 Prototype javascript for targets page
*/

//for save button in targets page
function save(){
	//Go to new calendar after clicking calendar icon in bottom tab bar
	document.getElementById("calendarOption").innerHTML = "<a class='nav-link' href='Calendar2.html'><img src='Images/Calendar.png' style='float:right' width='50' height='50'></a>";
	document.getElementById("saved").innerHTML = "Saved!"
	// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  if(document.getElementById("meditation").checked == true){
  	 localStorage.setItem("meditation", "Meditation");
  	}
	  var pracType = document.getElementById('otherPracType');
	  var pracTime = document.getElementById('practime');
	  var frequency = document.getElementById("freq");
	  var sleep = document.getElementById("sleep");
	  localStorage.setItem("practiceTime", pracTime);
	  localStorage.setItem("frequency", frequency);
	  localStorage.setItem("sleep", sleep);
} else {
  document.getElementById("meditation").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}

function login(){
	document.getElementById("login").innerHTML = "Logged In!";
}

//functions for check-in page
function clickSadEmoji(){
	document.getElementById("replaceImage").innerHTML = "<img src='Images/CheckinImages/sadUpdatedGraph.png' width='510' height='370' class='img-fluid'>";
	document.getElementById("replaceSadEmojiImage").innerHTML = "<img src= 'Images/CheckinImages/sad_emoji_dark.png' width=75' height='75' class='img-fluid'>";
	document.getElementById("replaceHappyEmojiImage").innerHTML = "<img src= 'Images/CheckinImages/happy_emoji.png' width='50' height='50' class='img-fluid' onclick='clickHappyEmoji()' >";
}

function clickHappyEmoji(){
	document.getElementById("replaceImage").innerHTML = "<img src='Images/CheckinImages/happyUpdatedGraph.png' width='510' height='370' class='img-fluid'>";
	document.getElementById("replaceHappyEmojiImage").innerHTML = "<img src= 'Images/CheckinImages/happy_emoji_dark.png' width='75' height='75' class='img-fluid'>";
	document.getElementById("replaceSadEmojiImage").innerHTML = "<img src='Images/CheckinImages/sad_emoji.png' width='50' height='50' class='img-fluid' onclick='clickSadEmoji()''>";
}

function undo(){
	document.getElementById("replaceSadEmojiImage").innerHTML = "<img src='Images/CheckinImages/sad_emoji.png' width='50' height='50' class='img-fluid' onclick='clickSadEmoji()''>";
	document.getElementById("replaceHappyEmojiImage").innerHTML = "<img src= 'Images/CheckinImages/happy_emoji.png' width='50' height='50' class='img-fluid' onclick='clickHappyEmoji()' >";
	document.getElementById("replaceImage").innerHTML = "<img src='Images/CheckinImages/moodGraph.png' class='img-fluid' width='510' height='370'>";
}


