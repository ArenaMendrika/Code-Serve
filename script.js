window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    toggleBtn.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-section");
  const images = aboutSection.querySelector(".about-images-two");
  const content = aboutSection.querySelector(".about-content");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        images.classList.add("visible");
        content.classList.add("visible");
      } else {
        images.classList.remove("visible");
        content.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.3
  });

  observer.observe(aboutSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("visible");
          }, index * 150);
        });
      } else {
        cards.forEach(card => card.classList.remove("visible"));
      }
    });
  }, { threshold: 0.3 });

  if (cards.length > 0) {
    observer.observe(document.querySelector(".workflow"));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactSection.classList.add("visible");
      } else {
        contactSection.classList.remove("visible");
      }
    });
  }, { threshold: 0.3 });

  if (contactSection) {
    observer.observe(contactSection);
  }
});

