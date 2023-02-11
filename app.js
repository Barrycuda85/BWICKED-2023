
function mathFun(t1, t2) { 
    return t1 * t2;
}   // FUNCTION 1 TRIGGERED BY EVENT

function myTime () {  
    return Date();
} // FUNCTION 2 TRIGGERED BY EVENT


let life=100; //  this is NUMBER

let guitar= "Ibanez";
let age= 37;

let name="Barry Wickham Jr"; // this is STRING

let degree= "AAS in Digital Media"

let x = 88; // this is GLOBAL SCOPE

var y = 6; // this is GLOBAL SCOPE 

let b = "Very Nice!" // this is a STRING
let t= 345;
let g= 566666;
let h= .2;

let saying;
if (new Date().getHours() < 18) {
  saying = "Howdy, ya'll!";
  }
 else if (new Date().getHours() < 10) {
    saying = "Good Morning, ya'll!";
}
else {
    saying= `Good Evening, ya'll!`;
}
document.getElementById("southern").innerHTML = saying;

let z = x + y // this is an EQUATION
{let x=678;} // this is BLOCK SCOPE

const bassGuitar = { 
    type: "Ibanez", 
    model:"Sound Gear", 
    color: "Mahogany",
    style: "5-string",
    fullDesc: function () {
      return  this.type + "  " + this.model + " a " + this.style + " " + this.color + " color" + " bass guitar";}
};// OBJECT with METHOD TRIGGERED BY EVENT


let inside = `My name is ${name}, and I am ${age} years old. I will get my ${degree} by the end of this year!`

document.getElementById("intro").innerHTML = inside; 

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("today").innerHTML = "Today is " + day.toUpperCase();

console.log (t.valueOf(), g.valueOf(), h.valueOf(), name.toUpperCase(), guitar.toUpperCase() )
console.log (b, x, y, z, life, name, bassGuitar, myTime, mathFun,bassGuitar)
