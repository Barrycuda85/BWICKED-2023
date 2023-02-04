
function mathFun(t1, t2) { 
    return t1 * t2;
}   // FUNCTION 1 TRIGGERED BY EVENT

function myTime () {  
    return Date();
} // FUNCTION 2 TRIGGERED BY EVENT


var life=100; //  this is NUMBER
var name='Barry Wickham Jr'; // this is STRING

let x = 88; // this is GLOBAL SCOPE

var y = 6; // this is GLOBAL SCOPE 

let b = "Very Nice!" // this is a STRING


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

console.log (b, x, y, z, life, name, bassGuitar, myTime, mathFun,bassGuitar);
