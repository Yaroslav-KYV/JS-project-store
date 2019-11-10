import modalTemp from './modalWindow.hbs';
import modalWindowStyle from './modalWindow.css';
import gallapiery from "../../js/utils/api";

const createListItem = ({ preview, original, description }) => {
  const listItem = document.createElement("li");

  listItem.classList.add("gallery__item");
  refs.galleryUl.appendChild(listItem);

  const pic = document.createElement("a");
  pic.classList.add("gallery__link");

  pic.setAttribute("href", preview);
  listItem.appendChild(pic);

  const imgPrew = document.createElement("img");
  imgPrew.classList.add("gallery__image");

  imgPrew.setAttribute("src", original);
  imgPrew.setAttribute("alt", description);
  imgPrew.dataset.source = original;

  const icon = document.createElement("span");
  icon.classList.add("gallery__icon");
  pic.append(imgPrew, icon);
  // pic.appendChild(icon);

  const iIcon = document.createElement("i");
  iIcon.classList.add("material-icons");
  iIcon.textContent = "zoom_out_map";
  icon.appendChild(iIcon);

  return listItem;
};

const renderListItems = (listRef, api) => {
  const listItems = api.map(item => createListItem(item));
  listRef.append(...listItems);
};

renderListItems(refs.galleryUl, api);


const refs ={

    galleryUl: document.querySelector(".lightbox"),
    divLightbox: document.querySelector(".lightbox__overlay"),
    closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
    liteboxOver: document.querySelector(".lightbox__content"),
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
