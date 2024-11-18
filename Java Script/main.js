console.log("Hello, World");
var copyright = document.getElementById("copyright")
const d = new Date();
let hour=d.getHours();
let year = d.getFullYear();
copyright.innerHTML+=d
console.log(d);
if(hour < 12){
    console.log ("Good morning!")
} else if(hour > 12 && hour < 17) {
    console.log ("Good afternoon!")
} else {
    console.log ("Good evening!")
};
