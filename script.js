"use strict";

// Get settings button and panel
const toggleSettingsButton = document.querySelector(".settings-btn");
const settingsMenu = document.querySelector(".settings-panel");

// Check if button and panel exist, then add toggle functionality
if (toggleSettingsButton && settingsMenu) {
  toggleSettingsButton.addEventListener("click", () => {
    settingsMenu.classList.toggle("active");
  });
}

// Store elements (tags) that can be styled
const elements = {
  title: document.querySelector(".content_area h1"),
  text: document.querySelector(".content_area p"),
};

// Get tag and color options
const tagOptionItems = document.querySelector(".choose_tag ul").children;
const colorOptionItems = document.querySelector(".font_color ul").children;

let selectedTagKey = "";

// Restore saved tag and color
loadSavedTag(); // restore selected tag
applySavedColors(); // restore color for that tag

// When user selects a tag to style
[...tagOptionItems].forEach((tag) => {
  tag.addEventListener("click", (e) => {
    // Store selected tag as lowercase (matches keys in elements)
    selectedTagKey = e.target.innerHTML.toLowerCase();

    // Save to localStorage
    saveSelectedTag(selectedTagKey);

    // Update active UI style
    [...tagOptionItems].forEach((c) => c.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// When user selects a color
[...colorOptionItems].forEach((color) => {
  color.addEventListener("click", () => {
    const selectedColor = color.getAttribute("data-color");

    // Apply color only if tag is selected and exists in elements
    if (elements[selectedTagKey]) {
      elements[selectedTagKey].style.color = selectedColor;
      saveColorForSelectedTag(selectedColor);
    }
  });
});

function saveSelectedTag(tag) {
  localStorage.setItem("tag", tag);
}

function saveColorForSelectedTag(color) {
  if (selectedTagKey) {
    localStorage.setItem(`color_${selectedTagKey}`, color);
  }
}

// Fix 1: Restore saved tag AND update UI
function loadSavedTag() {
  const savedTag = localStorage.getItem("tag");
  if (savedTag && elements[savedTag]) {
    selectedTagKey = savedTag;

    // Restore active class on saved tag
    [...tagOptionItems].forEach((tag) => {
      if (tag.innerHTML.toLowerCase() === savedTag) {
        tag.classList.add("active");
      }
    });
  }
}

//  Apply saved color to restored tag only if valid
function applySavedColors() {
  for (let tag in elements) {
    const savedColor = localStorage.getItem(`color_${tag}`);
    if (savedColor) {
      elements[tag].style.color = savedColor;
    }
  }
}
