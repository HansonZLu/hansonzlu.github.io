// script.js

// ==============================================
// DOM ELEMENT SELECTIONS
// ==============================================
// Get references to all the key elements we need to manipulate
const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
const leftContent = document.getElementById('left-content');
const rightContent = document.getElementById('right-content');
const leftMenu = document.getElementById('left-menu');
const rightMenu = document.getElementById('right-menu');
const leftPanel = document.getElementById('left-panel');
const rightPanel = document.getElementById('right-panel');
const container = document.querySelector('.container');

// ==============================================
// STATE TRACKING VARIABLES
// ==============================================
// Track whether menus are open or closed
let leftMenuOpen = false;
let rightMenuOpen = false;

// ==============================================
// MOUSE MOVEMENT HANDLER
// ==============================================
// Listen for mouse movement across the entire document
document.addEventListener('mousemove', (event) => {
    // Get window width and current mouse X position
    const windowWidth = window.innerWidth;
    const mouseX = event.clientX;
    
    // Only change active state if both menus are closed
    // This prevents content from changing while a menu is open
    if (!leftMenuOpen && !rightMenuOpen) {
        // If mouse is on the left half of the screen
        if (mouseX < windowWidth / 2) {
            // Activate the left side (show image)
            leftSide.classList.add('active');
            // Deactivate the right side (hide image)
            rightSide.classList.remove('active');
        } 
        // If mouse is on the right half of the screen
        else {
            // Deactivate the left side (hide image)
            leftSide.classList.remove('active');
            // Activate the right side (show image)
            rightSide.classList.add('active');
        }
    }
});

// ==============================================
// MENU TOGGLE FUNCTIONS
// ==============================================
// Function to toggle the left menu open/closed
function toggleLeftMenu() {
    // Toggle the state variable
    leftMenuOpen = !leftMenuOpen;
    
    if (leftMenuOpen) {
        // If opening the menu, add the expanded class to make it visible
        leftPanel.classList.add('expanded');
        // Ensure left content is visible when menu is open
        leftSide.classList.add('active');
        rightSide.classList.remove('active');
        
        // Close right menu if it's open to avoid having both open
        if (rightMenuOpen) {
            toggleRightMenu();
        }
    } else {
        // If closing the menu, remove the expanded class
        leftPanel.classList.remove('expanded');
    }
}

// Function to toggle the right menu open/closed
function toggleRightMenu() {
    // Toggle the state variable
    rightMenuOpen = !rightMenuOpen;
    
    if (rightMenuOpen) {
        // If opening the menu, add the expanded class to make it visible
        rightPanel.classList.add('expanded');
        // Ensure right content is visible when menu is open
        rightSide.classList.add('active');
        leftSide.classList.remove('active');
        
        // Close left menu if it's open to avoid having both open
        if (leftMenuOpen) {
            toggleLeftMenu();
        }
    } else {
        // If closing the menu, remove the expanded class
        rightPanel.classList.remove('expanded');
    }
}

// ==============================================
// CLICK OUTSIDE TO CLOSE FUNCTIONALITY
// ==============================================
// Listen for clicks anywhere in the document
document.addEventListener('click', (event) => {
    // Check if the click was on or within any of the menu elements
    const clickedOnLeftMenu = leftMenu.contains(event.target);
    const clickedOnRightMenu = rightMenu.contains(event.target);
    const clickedOnLeftPanel = leftPanel.contains(event.target);
    const clickedOnRightPanel = rightPanel.contains(event.target);
    
    // If click is outside all menu elements, close any open menus
    if (!clickedOnLeftMenu && !clickedOnRightMenu && !clickedOnLeftPanel && !clickedOnRightPanel) {
        // Close left menu if it's open
        if (leftMenuOpen) {
            leftMenuOpen = false;
            leftPanel.classList.remove('expanded');
        }
        
        // Close right menu if it's open
        if (rightMenuOpen) {
            rightMenuOpen = false;
            rightPanel.classList.remove('expanded');
        }
    }
});

// ==============================================
// MENU ICON CLICK HANDLERS
// ==============================================
// When left menu icon is clicked
leftMenu.addEventListener('click', (event) => {
    // Stop the click from bubbling up to document
    // This prevents the click outside handler from immediately closing the menu
    event.stopPropagation();
    // Toggle the left menu open/closed
    toggleLeftMenu();
});

// When right menu icon is clicked
rightMenu.addEventListener('click', (event) => {
    // Stop the click from bubbling up to document
    // This prevents the click outside handler from immediately closing the menu
    event.stopPropagation();
    // Toggle the right menu open/closed
    toggleRightMenu();
});

// ==============================================
// INITIALIZATION ON PAGE LOAD
// ==============================================
// When the DOM content is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    // Default to center position initially
    const mouseX = window.innerWidth / 2;
    
    // Set initial active state based on center position
    // (This would actually activate the right side since it's exactly at the midpoint)
    if (mouseX < window.innerWidth / 2) {
        leftSide.classList.add('active');
    } else {
        rightSide.classList.add('active');
    }
});
