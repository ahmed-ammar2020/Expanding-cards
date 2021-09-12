"use strict";
let images = document.querySelectorAll(".img-container");

images.forEach((image) => {
  image.addEventListener("click", function () {
    for (let image of images) {
      image.style.width = "10%";
    }
    image.style.width = "60%";
  });
});
