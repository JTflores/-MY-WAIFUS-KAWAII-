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
