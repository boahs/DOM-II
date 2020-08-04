//one wheel event on .img-content image [Bubbles = true]

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

//two mouseover event on header 2 [Bubbles = true]

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

changeHeadColor.addEventListener(
  "mouseover",
  function (event) {
    // highlight the mouseover target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false
);

// load event [bubbles = FALSE]

window.addEventListener("load", (event) => {
  //when we load our page we'll log our console with the following message below.
  console.log(`We've loaded the page successfully`);
});
