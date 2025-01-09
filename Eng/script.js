// script.js
const box = document.querySelector('.box');

let isDragging = false; // Track if the user is dragging
let startX, startY; // Starting mouse positions
let currentX = 0, currentY = 0; // Current rotation values

// Start dragging
box.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  box.style.cursor = 'grabbing'; // Change cursor to grabbing
});

// Rotate the box based on mouse movement
window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  // Calculate mouse movement
  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;

  // Update rotation values
  currentY += deltaX * 0.5; // Rotate along Y-axis
  currentX -= deltaY * 0.5; // Rotate along X-axis

  // Apply rotation
  box.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

  // Update start positions
  startX = e.clientX;
  startY = e.clientY;
});

// Stop dragging
window.addEventListener('mouseup', () => {
  isDragging = false;
  box.style.cursor = 'grab'; // Reset cursor
});