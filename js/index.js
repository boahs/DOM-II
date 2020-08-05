import { gsap } from "gsap";

//one -  wheel event on .img-content image [Bubbles = true]

const imgWheel = document.querySelector(".img-content img");

let scale = 1;

function zoom(event) {
  event.preventDefault(); // preventing default action of event. In our case our image is having it's default behavior stripped.

  scale += event.deltaY * -0.01; // we're using our scale variable with a value of 1 to + or = to our events location on the screen times our negative number

  // Restrict scale
  scale = Math.min(Math.max(1, scale), 2); // now scale must equal the mininum and maximum of how big we wanna increase/decrease it

  // Apply scale transform
  imgWheel.style.transform = `scale(${scale})`; // transforming our image equaling a string literal
}

imgWheel.addEventListener("wheel", zoom);

//two -  mouseover event on header 2 [Bubbles = true]

const changeHeadColor = document.querySelector("h2");

changeHeadColor.addEventListener(
  "mouseenter",
  function (event) {
    // highlight the mouseenter target
    event.target.style.color = "green"; // changes the style when the event is triggered

    // reset the color after a short delay
    setTimeout(function () {
      event.target.style.color = ""; // using a closure we can reset our color after 500 miliseeconds
    }, 500);
  },
  false
);

//three -  load event [bubbles = FALSE]

window.addEventListener("load", (event) => {
  //when we load our page we'll log our console with the following message below.
  console.log(`We've loaded the page successfully`);
});

// four - copy event [bubbles = TRUE]
const textCopy = document.querySelector(".intro h2"); //grabbing the intro class h2

textCopy.addEventListener("copy", (event) => {
  const selection = document.getSelection(); //getSelection() will return the text selected by the user
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase()); // we're taking our selection variable and morphing it into a string to use t he .toUpperCase() method
  event.preventDefault(); // preventing the default copy so we can use the methods above ^ (?)
});

//five - keydown event - [bubbles = TRUE]
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 116) {
    // 116 is the keycode for F5
    window.alert("Page is being refreshed");
  }
});

//six - mousemove event - [bubbles = TRUE]

const mouseMoveEvent = document.querySelector(".text-content h2");

mouseMoveEvent.addEventListener("mousemove", (event) => {
  event.target.style.color = "red";
});

//seven - dblclick event - [bubbles = TRUE]

const btnDouble = document.querySelector(".destination .btn");

btnDouble.addEventListener("dblclick", function (event) {
  window.prompt("Enter a username");
});

//eight - contextmenu event - [bubble = TRUE]
const noContext = document.querySelector(".intro p");

noContext.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

//nine - mouseleave event - [bubble = FALSE]

const mouseLeave = document.querySelector(".destination h4");

mouseLeave.addEventListener("mouseleave", (event) => {
  mouseLeave.style.border = "2px solid red";
});

//ten - mouseenter event - [bubble = FALSE]

const focusFooter = document.querySelector(".footer p");

focusFooter.addEventListener("mouseenter", (event) => {
  focusFooter.style.border = "8px solid green";
});

// prevent nav from refreshing page using prevent default();

const mNav = document.querySelector(".nav");

mNav.addEventListener("dblclick", (event) => {
  mNav.style.display = "none";
  event.preventDefault();
});

gsap.to(".logo-heading", { duration: 45, rotation: 360, scale: 0.5 });
