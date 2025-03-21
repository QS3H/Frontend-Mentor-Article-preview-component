"use strict";

const shareButton = document.getElementById("share-btn");
const shareBox = document.getElementById("share-box");

shareButton.addEventListener("click", function () {
  // Toggle the share box visibility
  if (shareBox.style.display === "flex") {
    shareBox.style.display = "none";
    shareButton.classList.remove("active");
  } else {
    shareBox.style.display = "flex";
    shareButton.classList.add("active");
  }
});

document.addEventListener("click", function (event) {
  if (!shareButton.contains(event.target) && !shareBox.contains(event.target)) {
    shareBox.style.display = "none";
    shareButton.classList.remove("active");
  }
});
