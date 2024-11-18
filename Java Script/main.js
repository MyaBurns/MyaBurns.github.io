console.log("Hello, World");
var copyright = document.getElementById("copyright")

const d = new Date();
let hour = d.getHours();
let year = d.getFullYear();
year = year.toString()
copyright.innerHTML+=year
console.log(d);

var greeting = document.getElementById("greeting")
if(hour < 12){
    console.log ("Good morning!");
    greeting.className = "greetingMorning"
    greeting.innerHTML += "Good morning!";
} else if(hour > 12 && hour < 17) {
    console.log ("Good afternoon!");
    greeting.className = "greetingAfternoon"
    greeting.innerHTML += "Good afternoon!";
} else {
    console.log ("Good evening!");
    greeting.className = "greetingEvening";
    greeting.innerHTML += "Good evening!";
};

var alertbtn = document.getElementById("btn-alert")
alertbtn.addEventListener("click", () => {
    console.log('hi there')
    alert();
});

alertbtn.addEventListener("mouseover", (e)=>{
    alertbtn.innerHTML = 'Press me'
})

var numbers = document.getElementById("numbers");

for (let index = 1; index <= 12; index++) {
    //numbers.innerHTML += "<li> Number" + index + "</li>"
    var item = document.createElement('li');
    if(index % 2){
        item.innerHTML = index + " odd"
    } else{
        item.innerHTML = index + " even"
    }
    numbers.appendChild(item)
}