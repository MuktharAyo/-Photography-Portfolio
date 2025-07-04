// Navigation Menu Toggle
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");

  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// Close menu when window is resized to desktop size
window.addEventListener("resize", function () {
  const windowSize = window.innerWidth;
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");

  if (windowSize > 768) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// Theme toggle button
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// 1) Initialize theme on load
(function () {
  const saved = localStorage.getItem("theme");
  if (
    saved === "light" ||
    (!saved && window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    root.classList.add("light");
  }
})();

// 2) Toggle on click & persist
themeToggle.addEventListener("click", () => {
  const isLight = root.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
