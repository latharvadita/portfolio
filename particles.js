// Get the canvas element and its 2D drawing context
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

// Array to store all particle objects
let particlesArray = [];

// Number of particles to generate
const numParticles = 80;

// Set canvas size to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize canvas when window size changes and reinitialize particles
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init(); // Re-create particles for new canvas size
});

// Particle class definition
class Particle {
  constructor() {
    // Initialize particle at random position
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    // Random size up to 2 pixels
    this.size = Math.random() * 2;
    // Random speed in both x and y directions
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    // Particle color (light pink with transparency)
    this.color = "rgba(255, 182, 193, 0.5)";
  }

  // Update particle position and bounce off edges
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce horizontally
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    // Bounce vertically
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  // Draw particle on canvas
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Draw a circle
    ctx.fill();
  }
}

// Initialize particle array with `numParticles` particles
function init() {
  particlesArray = [];
  for (let i = 0; i < numParticles; i++) {
    particlesArray.push(new Particle());
  }
}

// Animation loop
function animate() {
  // Clear the canvas each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw each particle
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });

  // Request the next frame
  requestAnimationFrame(animate);
}

// Initialize and start animation
init();
animate();
