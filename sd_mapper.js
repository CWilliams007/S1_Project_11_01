"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
    Author: Chad Williams
    Date:   2.12.19

*/
//step 5 creates a new date and sets it to var thisTime
var thisTime = new Date();

//step 6 sets timeStr to localetimestring
var timeStr = thisTime.toLocaleString();
// writes timeStr var to timeStamp html ID
document.getElementById("timeStamp").innerHTML = timeStr;

// sets thisHour to hours
var thisHour = thisTime.getHours();
// sets thisMonth to month
var thisMonth = thisTime.getMonth();
// sets the image number according to the math in the parantheses, chooses a png from the left
var mapNum = ((2 * thisMonth + thisHour) % 24);
// adds the var and picks the image 
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
// inserts imgStr into planisphere html ID
document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);