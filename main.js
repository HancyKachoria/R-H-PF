// Debug: Confirm JS is running
alert("JS is running!");
console.log("JS is running!");

// Boot typewriter effect only (debug version)
const bootText = "Initializing Neural Core...";
const bootType = document.getElementById("boot-type");
const bootOverlay = document.querySelector(".boot-overlay");
const mainContent = document.querySelector("main");

console.log("bootType:", bootType);

let i = 0;
function typeBoot() {
  console.log("typeBoot called, i =", i);
  if (!bootType) {
    console.log("bootType not found!");
    setTimeout(() => {
      bootOverlay.style.opacity = 0;
      setTimeout(() => {
        bootOverlay.style.display = "none";
        if (mainContent) mainContent.style.opacity = 1;
      }, 800);
    }, 2000);
    return;
  }
  if (i < bootText.length) {
    bootType.textContent += bootText.charAt(i);
    i++;
    setTimeout(typeBoot, 60);
  } else {
    setTimeout(() => {
      bootOverlay.style.opacity = 0;
      setTimeout(() => {
        bootOverlay.style.display = "none";
        if (mainContent) mainContent.style.opacity = 1;
      }, 800);
    }, 800);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (mainContent) mainContent.style.opacity = 0;
  typeBoot();
});
