let one = document.getElementById("h1"); //process to get a HTML element

let two = document.getElementById("h3");

let three = document.getElementById("p");

let four = document.getElementById("h2").innerHTML = "This HTML element has been changed using JS"; //selecting an element, and then changing its contemt using the .innerHTML property

let five = document.getElementById("color-text").style.color = "blue";

document.write("This has been added directly into this document! " + Date()); //Adding JS directly into the HTML document without accessing an element first

console.log (one, two, three, four);

