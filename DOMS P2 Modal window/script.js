"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

/*const btnsOpenModal = document.querySelector(".show-modal");...>
here if more than one line of same class and want to select 
use queryselectorall,because queryselector for single line*/
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModel = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  console.log("Button clicked");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", function () {
//     console.log("Button clicked");
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModel);

// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Handling an "ESC" keypress event

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
