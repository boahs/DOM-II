const imgWheel = document.querySelector(".img-content img");

let scale = 1;

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  imgWheel.style.transform = `scale(${scale})`;
}

imgWheel.addEventListener("wheel", zoom);
