document.addEventListener("DOMContentLoaded", () => {
  // ——— Navigation Menu Toggle ———
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");
  window.toggleMenu = () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  // ——— Theme Toggle ———
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  if (
    savedTheme === "light" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    root.classList.add("light");
  }
  themeToggle.addEventListener("click", () => {
    const isLight = root.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  // ——— Stats Counter on Scroll Into View ———
  const speed = 200;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting || target._started) return;
      target._started = true;
      obs.unobserve(target);

      setTimeout(() => {
        const end = +target.dataset.target;
        const inc = Math.ceil(end / speed);
        let cur = 0;
        (function tick() {
          cur += inc;
          target.innerText = cur < end ? cur : end;
          if (cur < end) setTimeout(tick, 20);
        })();
      }, +target.dataset.aosDelay || 0);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll(".stat-number").forEach(el => {
    el.dataset.aosDelay ||= "0";  // ensure delay exists
    observer.observe(el);
  });
});
