'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
const closedModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for(let i = 0; i < btnOpenModal.length;i++) {
 (btnOpenModal[i].addEventListener("click", openModal));
}

btnCloseModal.addEventListener('click', closedModal);
overlay.addEventListener("click", closedModal);

// this is listening for events everywhere
document.addEventListener('keydown', function(event) {
 if (event.key ==="Escape" && !modal.classList.contains('hidden')) {
     closedModal()
 }
});
