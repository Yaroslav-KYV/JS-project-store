const refs = {
  openModal: document.querySelector(".open-window"),
  closeModal: document.querySelector(".close-window"),
  backdrop: document.querySelector(".js-backdrop-modalwindow"),
  sectionContainer: document.querySelector("#sec2")
};

refs.openModal.addEventListener("click", openModal);
refs.closeModal.addEventListener("click", closeModal);
refs.backdrop.addEventListener("click", handelBackdropClick);

function openModal() {
  document.body.classList.add("show-modalwindow");
  window.addEventListener("keydown", closeModalESC);
}

function closeModal() {
  document.body.classList.remove("show-modalwindow");
  window.removeEventListener("keydown", closeModalESC);
}

function handelBackdropClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeModal();
}

function closeModalESC(e) {
  if (e.code !== "Escape") {
    return;
  }
  closeModal();
}
