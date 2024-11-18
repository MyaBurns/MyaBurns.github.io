console.log("Hello, World");
var copyright = document.getElementById("copyright")

const d = new Date();
let hour = d.getHours();
let year = d.getFullYear();
year = year.toString()
var yearFinal = year.split(" ")[3]
copyright.innerHTML+=d
console.log(d);

var greeting = document.getElementById("greeting")
if(hour < 12){
    console.log ("Good morning!")
    greeting.innerHTML += "Good morning!"
} else if(hour > 12 && hour < 17) {
    console.log ("Good afternoon!")
    greeting.innerHTML += "Good afternoon!"
} else {
    console.log ("Good evening!")
    greeting.innerHTML += "Good evening!"
};
