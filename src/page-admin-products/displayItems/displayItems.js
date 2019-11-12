import { renderAll } from "../../js/utils/helpers";
import { getShopData, deleteItem } from "../../js/utils/api";
import {takeData} from '../main'
import store from "../../js/store";
import templateForm from '../displayItems/formModal.hbs';
import shoes from '../../js/shoes'
import '../login.scss'
import "./modalWindow.scss";

// import { clearScreenDown } from 'readline';

// class Item {
//   //delete ad
//   async deleteItem(id, token) {
//     try {
//         let result = await this.axios.delete(`${this.url}/ads/${id}`, {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: token
//             }
//         });
//         return result;
//     } catch (error) {
//         throw new Error(error);
//     }
//   }

// };

const actions = {
  EDIT: "edit",
  DELETE: "delete"
};

const goods = document.querySelector(".my-goods");

const deleteListItem = element => {
  const parentListItem = element.closest(".item");

  const idP = element.dataset.id;

  deleteItem(idP).then(resData => console.log("resData :", resData));
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
const formMod = document.querySelector('.modal-content');
const addItemForm = document.querySelector('.AddNewItem');

function openModalFn(button) {
  // e.preventDefault();
  open.classList.remove("modal-hidden");
  const id = button.dataset.id;


  const createModalForm = product => {
    return templateForm(product)
  }

  const editElem = store.shopData.find(el => el._id === id)
  console.log('editElem :', editElem);
  const modalMarkup = createModalForm(editElem)


  formMod.innerHTML = modalMarkup;


// =============проверка на добавление фото
//     const fileMult = document.querySelector('#fileMulti');

//   fileMult.addEventListener('change', handleFileSelect);
//   open.addEventListener('submit', e => {
//     e.preventDefault();
// })
// function handleFileSelect(evt) {
//   const refsImg = {
//     outputMult: document.getElementById('outputMulti'),

//   }
//   let file = evt.target.files; // FileList object

//   refsImg.outputMult.innerHTML = "";
//   let f;
//   for (let i = 0; (f = file[i]); i++) {
//     // Перевірка. Загружати тільки IMG
//     if (!f.type.match('image.*')) {
//       alert('Image only please....');
//     }
//     let reader = new FileReader();
//     //
//     reader.onload = (function(theFile) {

//       return function(e) {

//         refsImg.outputMult.insertAdjacentHTML("beforeend", [
//           '<img class="thumb" title="',
//           ,
//           '" src="',
//           e.target.result,
//           '" />',
//         ].join(''))

// //         // запис фотографії в масив фотографій

  //       services.image.push(e.target.result);
  //     };
  //   })(f);
  //   // читає дані файлу-(f), а результатом є Data URL
  //   reader.readAsDataURL(f);
  // }

  // services.image = [];
// }

}

store.src = [];
// ====================== закрытие модалки
const closeModal = e => {
  open.classList.add("modal-hidden");
};

function handleOverlay(event) {
  if (event.target === event.currentTarget) {
    console.log("target----", event.target);
    console.log("currentTarget----", event.currentTarget);
    closeModal();
  }

 let imagesControl;
      imagesControl = shoes.src;
      if (store.src.length === 0) {
        imagesControl = ['./images/no-image.jpg'];
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








// метод для изменения айтема
// async changeAd(id, obj) {
//   try {
//     let result = await this.axios.patch(`${this.url}/ads/${id}`, obj, {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: this.userToken,
//       },
//     });
//     return result;
//   } catch (error) {
//     throw new Error(error);
//   }
// },
