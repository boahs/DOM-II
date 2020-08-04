//one wheel event on .img-content image

const imgWheel = document.querySelector(".img-content img");

let scale = 1;

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(1, scale), 2);

  // Apply scale transform
  imgWheel.style.transform = `scale(${scale})`;
}

imgWheel.addEventListener("wheel", zoom);

//two mouseover event on header 2

const changeHeadColor = document.querySelector("h2");

changeHeadColor.addEventListener(
  "mouseenter",
  function (event) {
    // highlight the mouseenter target
    event.target.style.color = "green";

    // reset the color after a short delay
    setTimeout(function () {
      event.target.style.color = "";
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
