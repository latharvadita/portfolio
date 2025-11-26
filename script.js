// === Typing Animation ===
// Array of titles to display in the typing effect
const titles = ["An Aspiring Software Engineer", "A Problem Solver", "A Creator", "An Innovator"];
const typingElement = document.getElementById("typing");

// Track the current title and character index
let titleIndex = 0, charIndex = 0;

// Typing and deleting speeds (ms) and pause between titles
const typingSpeed = 100, deletingSpeed = 50, pauseBetween = 1500;

// Function to type each character
function type() {
  const currentTitle = titles[titleIndex];

  if (charIndex < currentTitle.length) {
    // Add next character to the text content
    typingElement.textContent += currentTitle.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed); // Continue typing
  } else {
    // Pause before starting deletion
    setTimeout(deleteText, pauseBetween);
  }
}

// Function to delete each character
function deleteText() {
  const currentTitle = titles[titleIndex];

  if (charIndex > 0) {
    // Remove last character from text content
    typingElement.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, deletingSpeed); // Continue deleting
  } else {
    // Move to next title and start typing again
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(type, 500);
  }
}

// Start the typing animation
type();


// === Navbar Active Link Highlight ===
// Get all navbar links
const navLinks = document.querySelectorAll(".nav-link");

// Highlight the link of the section currently in view
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);

    if(section.offsetTop <= fromTop + 100 && section.offsetTop + section.offsetHeight > fromTop + 100){
      link.classList.add("active"); // Add active class
    } else {
      link.classList.remove("active"); // Remove active class
    }
  });
});


// === Fade-in on Scroll ===
// Select all elements with fade-in class
const faders = document.querySelectorAll('.fade-in');

// Observer options
const appearOptions = { threshold: 0.2 };

// Intersection Observer to fade in elements
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;  // Skip if not visible
    entry.target.classList.add('show'); // Add show class to trigger animation
    observer.unobserve(entry.target);   // Stop observing once animated
  });
}, appearOptions);

// Observe each fade-in element
faders.forEach(fader => appearOnScroll.observe(fader));


// === Animate Skill Rings / Tooltips ===
// Get tooltip element
const tooltip = document.getElementById('skill-tooltip');

// Get all skill-circle elements
const skills = document.querySelectorAll('.skill-circle');

// Show tooltip on hover
skills.forEach(skill => {
  skill.addEventListener('mouseenter', e => {
    tooltip.textContent = skill.dataset.info; // Set tooltip text
    tooltip.style.opacity = 1;                // Make tooltip visible
  });

  skill.addEventListener('mousemove', e => {
    // Move tooltip with mouse
    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  skill.addEventListener('mouseleave', e => {
    tooltip.style.opacity = 0; // Hide tooltip when mouse leaves
  });
});
