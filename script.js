// script.js

// DOM Elements
const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
const leftContent = document.getElementById('left-content');
const rightContent = document.getElementById('right-content');
const leftMenu = document.getElementById('left-menu');
const rightMenu = document.getElementById('right-menu');
const leftPanel = document.getElementById('left-panel');
const rightPanel = document.getElementById('right-panel');

// Track menu state
let leftMenuOpen = false;
let rightMenuOpen = false;

// Handle mouse movement for content visibility
document.addEventListener('mousemove', (event) => {
    const windowWidth = window.innerWidth;
    const mouseX = event.clientX;
    
    // Only change active state if menus are closed
    if (!leftMenuOpen && !rightMenuOpen) {
        // Mouse is on the left side
        if (mouseX < windowWidth / 2) {
            leftSide.classList.add('active');
            rightSide.classList.remove('active');
        } 
        // Mouse is on the right side
        else {
            leftSide.classList.remove('active');
            rightSide.classList.add('active');
        }
    }
});

// Menu toggle functions
function toggleLeftMenu() {
    leftMenuOpen = !leftMenuOpen;
    
    if (leftMenuOpen) {
        leftPanel.classList.add('expanded');
        // Ensure left content is visible when menu is open
        leftSide.classList.add('active');
        rightSide.classList.remove('active');
        
        // Close right menu if open
        if (rightMenuOpen) {
            toggleRightMenu();
        }
    } else {
        leftPanel.classList.remove('expanded');
    }
}

function toggleRightMenu() {
    rightMenuOpen = !rightMenuOpen;
    
    if (rightMenuOpen) {
        rightPanel.classList.add('expanded');
        // Ensure right content is visible when menu is open
        rightSide.classList.add('active');
        leftSide.classList.remove('active');
        
        // Close left menu if open
        if (leftMenuOpen) {
            toggleLeftMenu();
        }
    } else {
        rightPanel.classList.remove('expanded');
    }
}

// Event listeners for menu icons
leftMenu.addEventListener('click', toggleLeftMenu);
rightMenu.addEventListener('click', toggleRightMenu);

// Initialize the left side as active on page load
window.addEventListener('DOMContentLoaded', () => {
    const mouseX = window.innerWidth / 2; // Default to center
    
    if (mouseX < window.innerWidth / 2) {
        leftSide.classList.add('active');
    } else {
        rightSide.classList.add('active');
    }
});
