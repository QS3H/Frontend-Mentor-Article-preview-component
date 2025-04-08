"use strict";

const shareButton = document.getElementById("share-btn");
const shareBox = document.getElementById("share-box");

// error handling for DOM elements
if (!shareButton || !shareBox) {
  console.error("Required elements not found");
  throw new Error("Required elements not found");
}

shareBox.classList.add("hidden");

shareButton.addEventListener("click", () => {
  shareButton.classList.toggle("active");
  shareBox.classList.toggle("active");
});

// Closes share box when clicking outside
document.addEventListener("click", (event) => {
  if (!shareButton.contains(event.target) && !shareBox.contains(event.target)) {
    shareButton.classList.remove("active");
    shareBox.classList.remove("active");
    shareBox.classList.toggle("hidden");
  }
});

// keyboard accessibility
shareButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    shareButton.click();
  }
});
