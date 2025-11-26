// === Typing Animation ===
const titles = ["An Aspiring Software Engineer", "A Problem Solver", "A Creator", "An Innovator"];
const typingElement = document.getElementById("typing");

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


// === Navbar Active Link Highlight ===
const navLinkItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  navLinkItems.forEach(link => {
    const section = document.querySelector(link.hash);
    if (!section) return; // skip if section doesn't exist

    if(section.offsetTop <= fromTop + 100 && section.offsetTop + section.offsetHeight > fromTop + 100){
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


// === Fade-in on Scroll ===
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


// === Animate Skill Tooltips ===
const tooltip = document.getElementById('skill-tooltip');
const skills = document.querySelectorAll('.skill-circle');

skills.forEach(skill => {
  skill.addEventListener('mouseenter', e => {
    tooltip.textContent = skill.dataset.info;
    tooltip.style.opacity = 1;
  });

  skill.addEventListener('mousemove', e => {
    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  skill.addEventListener('mouseleave', e => {
    tooltip.style.opacity = 0;
  });
});


// === Hamburger Menu ===
const hamburger = document.querySelector(".hamburger");
const navLinksMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinksMenu.classList.toggle("active");
});
