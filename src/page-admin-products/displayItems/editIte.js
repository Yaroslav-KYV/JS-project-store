
const refs ={

    galleryUl: document.querySelector(".categories-array"),
    divLightbox: document.querySelector("div.lightbox"),
    // closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
    // liteboxOver: document.querySelector(".lightbox__content"),
}

refs.galleryUl.addEventListener("click", openModalTwo);
refs.closeModalBtn.addEventListener("click", closeModal);
refs.liteboxOver.addEventListener('click', handleOverlay);



function openModalTwo(event) {
  if (event.target !== event.currentTarget) {
  event.preventDefault();
  refs.divLightbox.classList.add("is-open");
  const altImg = event.target.alt;
  const dataImg = event.target.dataset.source;
  refs.lightboxImage.src = dataImg;
  refs.lightboxImage.setAttribute('alt', altImg);
  window.addEventListener('keydown' , handleKeyPress );


  }
}

function closeModal () {
  refs.divLightbox.classList.remove("is-open");
  window.removeEventListener('keydown' , handleKeyPress);
}

function handleOverlay (event) {
  if (event.target !== event.currentTarget) {
    // console.log("target----", event.target);
    // console.log("currentTarget----", event.currentTarget);
   return;
    }

    closeModal();
}

function handleKeyPress (event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
}
