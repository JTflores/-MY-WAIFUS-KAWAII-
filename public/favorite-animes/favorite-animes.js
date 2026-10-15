
const sections = document.querySelectorAll(".entry");
const links = document.querySelectorAll(".rail a");


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector(".background");
      const index = [...sections].indexOf(entry.target);

      if (entry.isIntersecting) {
        video.play().catch(() => {}); 
        sections.forEach((section) => section.classList.remove("active"));
        links.forEach((link) => link.classList.remove("active"));

        entry.target.classList.add("active");
        links[index].classList.add("active");
      } else {
        video.pause();
      }
    });
  },
  { threshold: 0.5 },
);

// 3. Watch every section
sections.forEach((section) => observer.observe(section));
