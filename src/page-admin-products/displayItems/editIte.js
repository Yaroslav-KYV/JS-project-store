
import modalWindowStyle from './modalWindow.scss';
import gallapiery from "../../js/utils/api";


export const edit = () => {


const openModal = document.querySelector('.btn-modal');
const open = document.querySelector('.js-modal-backdrop');
const secondBut = document.querySelector(".close-btn");
const liteboxOver = document.querySelector('.modal')



const openModalFn = (e) => {

    e.preventDefault();
    open.classList.remove('modal-hidden')
    console.log(open);


}

const closeModal = ( e) => {

    open.classList.add('modal-hidden');

}


function handleOverlay (event) {
  e.preventDefault();
    if (event.target === event.currentTarget) {
      console.log("target----", event.target);
      console.log("currentTarget----", event.currentTarget);
      closeModal();
      }}

openModal.addEventListener('click' , openModalFn);
secondBut.addEventListener('click' , closeModal);
liteboxOver.addEventListener('click', handleOverlay);
    }
