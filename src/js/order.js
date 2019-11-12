// Modal
const modalOpen = document.querySelector(".accept-window");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".close-button");

modalOpen.addEventListener("click", e => {
  e.preventDefault();
  if(e.target.nodeName === "A" ||
  e.target.dataset.action === "openModal"){
    modalBg.classList.add("bg-active");
  }
});
modalBg.addEventListener("click", e => {
  if (
    (e.target.nodeName === "SPAN" &&
      e.target.dataset.action === "closeModalWindow") ||
    e.target.dataset.action === "closeModalOut"
  ) {
    modalBg.classList.remove("bg-active");
  }
});

window.addEventListener("keydown", e => {
  if (e.keyCode === 27 && modalBg.classList.contains("bg-active")) {
    modalBg.classList.remove("bg-active");
  }
});
// Order
