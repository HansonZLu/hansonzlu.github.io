// script.js

const imageLeft = document.getElementById('image-left');
const imageRight = document.getElementById('image-right');

document.addEventListener('mousemove', (event) => {
    const windowWidth = window.innerWidth;
    const mouseX = event.clientX; // Get the horizontal position of the mouse

    // Check if the mouse is on the left or right side
    if (mouseX < windowWidth / 2) {
        // Mouse is on the left side
        imageLeft.style.opacity = '1';
        imageRight.style.opacity = '0';
    } else {
        // Mouse is on the right side
        imageLeft.style.opacity = '0';
        imageRight.style.opacity = '1';
    }
});
