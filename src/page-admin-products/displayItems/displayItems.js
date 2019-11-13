import { renderAll } from "../../js/utils/helpers";
import { getShopData, deleteItem } from "../../js/utils/api";
import {takeData} from '../main'
import store from "../../js/store";
import templateForm from '../displayItems/formModal.hbs';
import shoes from '../../js/shoes';
import '../login.scss';
import "./modalWindow.scss";



const actions = {
  EDIT: "edit",
  DELETE: "delete"
};

const goods = document.querySelector(".my-goods");

const deleteListItem = element => {
  const parentListItem = element.closest(".item");

  const idP = element.dataset.id;

  deleteItem(idP, store.admin.token).then(resData => console.log("resData :", resData));
  parentListItem.remove();
};

const handleListClick = ({ target }) => {
  const button = target.closest("button");
  if (!button) return;
  console.log('button :', button);

  const action = button.dataset.action;

  switch (action) {
    case actions.DELETE:
      deleteListItem(button);

      break;

    case actions.EDIT:

      // openModalFn(clo);
      openModalFn(button);

      break;
  }
};


// ===============событие на кнопку




// const openModal = document.querySelector('.btn-modal');
const open = document.querySelector(".js-modal-backdrop");
const secondBut = document.querySelector(".close-btn");
const liteboxOver = document.querySelector(".modal");
const formContent = document.querySelector('.form-content');
const formUpdate = document.getElementById('update-form');
const addItemForm = document.querySelector('.AddNewItem');

formUpdate.addEventListener('submit', e =>  {
  takeData(e, 'update', store.editElemenId)
  closeModal();
})

function openModalFn(button) {
  // button.preventDefault();
  open.classList.remove("modal-hidden");
  const id = button.dataset.id;

  store.editElemenId = id;


  const createModalForm = product => {
    return templateForm(product)
  }

  const editElem = store.shopData.find(el => el._id === id)
  console.log('editElem :', editElem);
  const modalMarkup = createModalForm(editElem)


  formContent.innerHTML = modalMarkup;


}

store.src = [];
// ====================== закрытие модалки
function closeModal (e) {
  open.classList.add("modal-hidden");
};

function handleOverlay(event) {
  if (event.target === event.currentTarget) {
    console.log("target----", event.target);
    console.log("currentTarget----", event.currentTarget);
    closeModal();
  }

}

// openModal.addEventListener('click' , openModalFn);
addItemForm.addEventListener('submit', takeData)
secondBut.addEventListener("click", closeModal);
liteboxOver.addEventListener("click", handleOverlay);

goods.addEventListener("click", handleListClick);

getShopData().then(resData => {
  store.shopData = resData;
  goods.innerHTML = renderAll(resData, 'admin');
});



