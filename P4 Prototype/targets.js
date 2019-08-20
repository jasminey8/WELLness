/*
FILE NAME: targets.js
WRITTEN BY: Jasmine Yuan
DATE: 4/9/19
PURPOSE: CS220 P4 Prototype javascript for targets page
*/


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

