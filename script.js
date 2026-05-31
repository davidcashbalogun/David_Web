// =========================
// MENU TOGGLE
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  menuToggle.classList.toggle("active");

});

// =========================
// CLOSE MOBILE MENU
// =========================

document.querySelectorAll(".nav-link").forEach(link => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });

});

// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});

// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  header.classList.toggle(
    "scrolled",
    window.scrollY > 50
  );

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const hiddenElements =
  document.querySelectorAll(".hidden");

const observer =
  new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        entry.target.classList.add("show");

      }

    });

  },

  {
    threshold:0.15
  }

);

hiddenElements.forEach((el, index) => {

  el.style.transitionDelay =
    `${index * 0.1}s`;

  observer.observe(el);

});

// =========================
// TYPING EFFECT
// =========================

const words = [
  "Frontend Developer",
  "UI Designer",
  "Freelancer",
  "Software Engineering Student"
];

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (isDeleting) {

    typingElement.textContent =
      currentWord.substring(0, charIndex--);

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex++);

  }

  // FINISH WORD
  if (!isDeleting && charIndex === currentWord.length + 1) {

    isDeleting = true;

    setTimeout(typeEffect, 1200);

    return;
  }

  // DELETE WORD
  if (isDeleting && charIndex === 0) {

    isDeleting = false;

    wordIndex = (wordIndex + 1) % words.length;

  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);

}

document.addEventListener("DOMContentLoaded", typeEffect);

// =========================
// THEME TOGGLE
// =========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  // CHANGE ICON
  if (document.body.classList.contains("light-mode")) {

    themeToggle.innerHTML =
      '<i class="fa-solid fa-sun"></i>';

  } else {

    themeToggle.innerHTML =
      '<i class="fa-solid fa-moon"></i>';

  }

});

// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {

      loader.style.display = "none";

    }, 500);

  }, 1200);

});

// =========================
// EMAILJS
// =========================

emailjs.init("davkC4o-L1ldDRIT2");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

  e.preventDefault();

  const submitBtn = contactForm.querySelector("button");

  submitBtn.textContent = "Sending...";

  emailjs.send(
    "service_k40jiin",
    "template_2e1j5c5",
    {
      from_name: this[0].value,
      from_email: this[1].value,
      message: this[2].value
    }
  )

  .then(() => {

    submitBtn.textContent = "Message Sent ✓";

    alert("Message sent successfully!");

    contactForm.reset();

  })

  .catch((error) => {

    console.log(error);

    submitBtn.textContent = "Send Message";

    alert("Failed to send message.");

  });

});
// =========================
// SCROLL PROGRESS BAR
// =========================

window.addEventListener("scroll", () => {

  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent =
    (scrollTop / scrollHeight) * 100;

  document.getElementById(
    "progress-bar"
  ).style.width = scrollPercent + "%";

});

// =========================
// CUSTOM CURSOR
// =========================

const cursorDot =
  document.querySelector(".cursor-dot");

const cursorOutline =
  document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate({

    left: `${posX}px`,
    top: `${posY}px`

  }, {
    duration: 500,
    fill: "forwards"
  });

});

// HOVER EFFECT
const hoverElements =
  document.querySelectorAll(
    "a, button, .project-card"
  );

hoverElements.forEach((el) => {

  el.addEventListener("mouseenter", () => {

    cursorOutline.classList.add("cursor-hover");

  });

  el.addEventListener("mouseleave", () => {

    cursorOutline.classList.remove("cursor-hover");

  });

});

// =========================
// PARTICLE GENERATOR
// =========================

const particles =
  document.querySelector(".particles");

for (let i = 0; i < 40; i++) {

  const particle =
    document.createElement("span");

  const size =
    Math.random() * 6 + 2;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  particle.style.left =
    `${Math.random() * 100}%`;

  particle.style.animationDuration =
    `${Math.random() * 15 + 10}s`;

  particle.style.animationDelay =
    `${Math.random() * 5}s`;

  particles.appendChild(particle);

}