// =====================================
// MENU TOGGLE
// =====================================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
if(menuToggle && navLinks){
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}
// =====================================
// CLOSE MOBILE MENU
// =====================================
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("active");
    menuToggle?.classList.remove("active");
  });
});
// =====================================
// ACTIVE NAVIGATION
// =====================================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop =
      section.offsetTop - 150;
    const sectionHeight =
      section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.id;
    }
  });
  navItems.forEach(link => {
    link.classList.remove("active");
    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {
      link.classList.add("active");
    }
  });
});
// =====================================
// HEADER SCROLL EFFECT
// =====================================
const header =
  document.querySelector(".header");
window.addEventListener("scroll", () => {
  if(header){
    header.classList.toggle(
      "scrolled",
      window.scrollY > 50
    );
  }
});
// =====================================
// REVEAL ANIMATION
// =====================================
const revealElements =
  document.querySelectorAll(".hidden");
const revealObserver =
  new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold:0.15
    }
  );
revealElements.forEach((el,index) => {
  el.style.transitionDelay =
    `${index * 0.08}s`;
  revealObserver.observe(el);
});
// =====================================
// TYPING EFFECT
// =====================================
const typingElement =
  document.getElementById("typing");
const words = [
  "Frontend Developer",
  "UI Designer",
  "Freelancer",
  "Software Engineering Student"
];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
function typeEffect(){
  if(!typingElement) return;
  const currentWord =
    words[wordIndex];
  if(deleting){
    typingElement.textContent =
      currentWord.substring(
        0,
        charIndex--
      );
  }else{
    typingElement.textContent =
      currentWord.substring(
        0,
        charIndex++
      );
  }
  if(
    !deleting &&
    charIndex === currentWord.length + 1
  ){
    deleting = true;
    setTimeout(
      typeEffect,
      1500
    );
    return;
  }
  if(
    deleting &&
    charIndex === 0
  ){
    deleting = false;
    wordIndex =
      (wordIndex + 1) %
      words.length;
  }
  setTimeout(
    typeEffect,
    deleting ? 60 : 100
  );
}
document.addEventListener(
  "DOMContentLoaded",
  typeEffect
);
// =====================================
// THEME TOGGLE + SAVE
// =====================================
const themeToggle =
  document.getElementById("theme-toggle");
const savedTheme =
  localStorage.getItem("theme");
if(savedTheme === "light"){
  document.body.classList.add(
    "light-mode"
  );
  if(themeToggle){
    themeToggle.innerHTML =
      '<i class="fa-solid fa-sun"></i>';
  }
}
themeToggle?.addEventListener(
  "click",
  () => {
    document.body.classList.toggle(
      "light-mode"
    );
    const isLight =
      document.body.classList.contains(
        "light-mode"
      );
    localStorage.setItem(
      "theme",
      isLight ? "light" : "dark"
    );
    themeToggle.innerHTML =
      isLight
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
  }
);
// =====================================
// LOADER
// =====================================
window.addEventListener(
  "load",
  () => {
    const loader =
      document.getElementById(
        "loader"
      );
    if(!loader) return;
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display =
          "none";
      },500);
    },1200);
  }
);
// =====================================
// SCROLL PROGRESS BAR
// =====================================
window.addEventListener(
  "scroll",
  () => {
    const progressBar =
      document.getElementById(
        "progress-bar"
      );
    if(!progressBar) return;
    const scrollTop =
      document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress =
      (scrollTop / scrollHeight) * 100;
    progressBar.style.width =
      progress + "%";
  }
);
// =====================================
// EMAILJS CONTACT FORM
// =====================================
if(typeof emailjs !== "undefined"){
  emailjs.init(
    "davkC4o-L1ldDRIT2"
  );
}
const contactForm =
  document.getElementById(
    "contact-form"
  );
contactForm?.addEventListener(
  "submit",
  function(e){
    e.preventDefault();
    const submitBtn =
      contactForm.querySelector(
        "button"
      );
    submitBtn.textContent =
      "Sending...";
    emailjs.send(
      "service_k40jiin",
      "template_2e1j5c5",
      {
        from_name:
          this.name.value,
        from_email:
          this.email.value,
        message:
          this.message.value
      }
    )
    .then(() => {
      submitBtn.textContent =
        "Message Sent ✓";
      alert(
        "Message sent successfully!"
      );
      contactForm.reset();
      setTimeout(() => {
        submitBtn.textContent =
          "Send Message";
      },3000);
    })
    .catch(error => {
      console.error(error);
      submitBtn.textContent =
        "Send Message";
      alert(
        "Unable to send message."
      );
    });
  }
);
// =====================================
// CUSTOM CURSOR
// =====================================
const cursorDot =
  document.querySelector(
    ".cursor-dot"
  );
const cursorOutline =
  document.querySelector(
    ".cursor-outline"
  );
if(cursorDot && cursorOutline){
  window.addEventListener(
    "mousemove",
    e => {
      cursorDot.style.left =
        `${e.clientX}px`;
      cursorDot.style.top =
        `${e.clientY}px`;
      cursorOutline.animate(
        {
          left:`${e.clientX}px`,
          top:`${e.clientY}px`
        },
        {
          duration:300,
          fill:"forwards"
        }
      );
    }
  );
  document
    .querySelectorAll(
      "a, button, .project-card"
    )
    .forEach(el => {
      el.addEventListener(
        "mouseenter",
        () => {
          cursorOutline.classList.add(
            "cursor-hover"
          );
        }
      );
      el.addEventListener(
        "mouseleave",
        () => {
          cursorOutline.classList.remove(
            "cursor-hover"
          );
        }
      );
    });
}
// =====================================
// PARTICLES GENERATOR
// =====================================
const particles =
  document.querySelector(
    ".particles"
  );
if(particles){
  for(let i=0;i<40;i++){
    const particle =
      document.createElement(
        "span"
      );
    const size =
      Math.random() * 6 + 2;
    particle.style.width =
      `${size}px`;
    particle.style.height =
      `${size}px`;
    particle.style.left =
      `${Math.random() * 100}%`;
    particle.style.animationDuration =
      `${Math.random() * 15 + 10}s`;
    particle.style.animationDelay =
      `${Math.random() * 5}s`;
    particles.appendChild(
      particle
    );
  }
}
console.log(
  "David_Web Portfolio Loaded Successfully"
);