
document.getElementById("change").style.color = "blue";
document.getElementById("change").style.fontFamily = "Arial";
document.getElementById("change").style.fontSize = "xx-large";


document.getElementById("new").style.color = "SteelBlue";
document.getElementById("new").style.fontFamily = "Arial";
document.getElementById("new").style.fontSize = "xx-large";

document.getElementById("model").style.color = "SteelBlue";


document.getElementById("today").style.color = "SteelBlue";

document.getElementById("back").style.backgroundColor = "SandyBrown";
document.getElementById("back").style.color = "WhiteSmoke";
document.getElementById("back").style.textShadow = " 2px 2px 2px black" ;

document.getElementById("alert").addEventListener("click", function()
{alert("ALL OF THEM! I WOULD GET ALL OF THEM!!!")
})



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
document.getElementById("today").innerHTML ="Today is " + day.toUpperCase();

console.log (t.valueOf(), g.valueOf(), h.valueOf(), name.toUpperCase(), guitar.toUpperCase() )
console.log (b, x, y, z, life, name, bassGuitar, myTime, mathFun,bassGuitar)


const bassBrands = ["Fender", "Rickenbacker", "Warwick","Washburn","Hofner","Gibson","Schecter"];
document.getElementById("guitar").innerHTML = bassBrands; 


let type = "";
for (let x in bassBrands) {
 type += bassBrands[x] + "<br>"; 
}
document.getElementById("model").innerHTML= type;

let i = 0;
let brands = "";
while (bassBrands[i]) {
  brands += bassBrands[i] + "<br>";
  i++;
}
document.getElementById("brand").innerHTML =brands;

let txt = "";
bassBrands.forEach(bassFunction);
document.getElementById("guitar").innerHTML = txt;

function bassFunction() {
  for (let i = bassBrands.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k =bassBrands[i];
    bassBrands[i] =bassBrands[j];
    bassBrands[j] = k;
  }
  document.getElementById("guitar").innerHTML = bassBrands;
}








