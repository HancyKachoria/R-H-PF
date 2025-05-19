const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

// Cursor movement
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  cursorDot.style.left = `${clientX}px`;
  cursorDot.style.top = `${clientY}px`;

  cursorOutline.style.left = `${clientX}px`;
  cursorOutline.style.top = `${clientY}px`;
});

// Cursor hover effects
document.querySelectorAll("a, button, .interactive").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursorOutline.style.borderColor = "var(--secondary)";
  });

  element.addEventListener("mouseleave", () => {
    cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
    cursorOutline.style.borderColor = "var(--primary)";
  });
});

// Hide cursor when leaving window
document.addEventListener("mouseleave", () => {
  cursorDot.style.opacity = "0";
  cursorOutline.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
  cursorDot.style.opacity = "1";
  cursorOutline.style.opacity = "1";
});

const mainContent = document.querySelector("main");
window.addEventListener("DOMContentLoaded", () => {
  if (mainContent) mainContent.style.opacity = 0;
});
