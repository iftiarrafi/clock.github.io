// var hourEl = document.getElementsByClassName("hour");
// var minuteEl = document.getElementsByClassName("minute");
// var secondEl = document.getElementsByClassName("second");

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

var hourDeg;
var minDeg;
var secDeg;


var hour;
var min;
var sec;

function updateclock(){
var shomoy  = new Date();
setTimeout(updateclock,1000);


hour = shomoy.getHours();
if(hourEl > 12){
    hourEl = hourEl - 12 ; 
}

min = shomoy.getMinutes();
sec = shomoy.getSeconds();

hourDeg = (hour/12)*360;
hourEl.style.transform  = `rotate(${hourDeg}deg)`;



minDeg = (min/60)*360;
minuteEl.style.transform  = `rotate(${minDeg}deg)`;



secDeg = (sec/60)*360;
secondEl.style.transform  = `rotate(${secDeg}deg)`;


console.log(hourDeg,minDeg,secDeg);

}

updateclock();
