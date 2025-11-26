// script.js
document.addEventListener("DOMContentLoaded", () => {

  // === Hamburger Menu Toggle ===
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-link");

  if (hamburger && navMenu) {
    // Toggle menu on click
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Close menu when a nav link is clicked
    navItems.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  // === Typing Animation ===
  const typingElement = document.getElementById("typing");
  if (typingElement) {
    const titles = ["An Aspiring Software Engineer", "A Problem Solver", "A Creator", "An Innovator"];
    let titleIndex = 0, charIndex = 0;
    const typingSpeed = 100, deletingSpeed = 50, pauseBetween = 1500;

    function type() {
      const currentTitle = titles[titleIndex];
      if (charIndex < currentTitle.length) {
        typingElement.textContent += currentTitle.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(deleteText, pauseBetween);
      }
    }

    function deleteText() {
      const currentTitle = titles[titleIndex];
      if (charIndex > 0) {
        typingElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, deletingSpeed);
      } else {
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(type, 500);
      }
    }

    type();
  }

  // === Fade-in on Scroll ===
  const faders = document.querySelectorAll('.fade-in');
  if (faders.length > 0) {
    const appearOptions = { threshold: 0.2 };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));
  }

  // === Navbar Active Link Highlight on Scroll ===
  const navLinks = document.querySelectorAll(".nav-link");
  if (navLinks.length > 0) {
    window.addEventListener("scroll", () => {
      const fromTop = window.scrollY;
      navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section && section.offsetTop <= fromTop + 100 && section.offsetTop + section.offsetHeight > fromTop + 100) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  }

});
