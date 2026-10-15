const sections = document.querySelectorAll(".section");

const videos = document.querySelectorAll(".background");

const dots = document.querySelectorAll(".nav-dot");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector(".background");

      const index = [...sections].indexOf(entry.target);

      if (entry.isIntersecting) {
        video.play().catch(() => {});

        dots.forEach((dot) => {
          dot.classList.remove("active");
        });

        dots[index].classList.add("active");
      } else {
        video.pause();
      }
    });
  },

  {
    threshold: 0.5,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

dots.forEach((dot) => {
  dot.addEventListener("click", function (event) {
    event.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const loader = document.getElementById("loader");
const MIN_TIME = 3000; 
const startTime = Date.now();

document.body.classList.add("loading");

function hideLoader() {
  const waitTime = Math.max(0, MIN_TIME - (Date.now() - startTime));

  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.classList.remove("loading");
  }, waitTime);
}

if (document.readyState === "complete") {
  hideLoader();
} else {
  window.addEventListener("load", hideLoader);
}
