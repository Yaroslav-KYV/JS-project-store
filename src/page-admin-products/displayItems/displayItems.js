import { renderAll } from "../../js/utils/helpers";
import { getShopData, deleteItem } from "../../js/utils/api";
import store from "../../js/store";
import teplateForm from '../displayItems/formModal.hbs';

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

  const idP = element.id;

  deleteItem(idP).then(resData => console.log("resData :", resData));
  parentListItem.remove();
};

const handleListClick = ({ target }) => {
  const clo = target.closest("button");
  if (!clo) return;

  const action = clo.dataset.action;

  switch (action) {
    case actions.DELETE:
      deleteListItem(clo);

      break;

    case actions.EDIT:

      // openModalFn(clo);
      openModalFn(teplateForm(getShopData));
      break;
  }
};

// const openModal = document.querySelector('.btn-modal');
const open = document.querySelector(".js-modal-backdrop");
const secondBut = document.querySelector(".close-btn");
const liteboxOver = document.querySelector(".modal");

function openModalFn(e) {
  // e.preventDefault();
  open.classList.remove("modal-hidden");
  console.log(open);
}

const closeModal = e => {
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
secondBut.addEventListener("click", closeModal);
liteboxOver.addEventListener("click", handleOverlay);

goods.addEventListener("click", handleListClick);
const isAdmin = true;

getShopData().then(resData => {
  store.shopData = resData.products;
  goods.innerHTML = renderAll(resData.products, isAdmin);
});

// const modalMarkup = teplateForm(здесь данные[0])

const createModalForm = product => {
  return teplateForm(product)
}









// export function addListenerEditDel() {
//   const editId = document.querySelector('.my-goods');

//   editId.addEventListener('click', handleListClick);
// }
// ========================

//получить товар по айди в модальном окне
// function getItem () {
//   const idP = element.id;

//       const result = await this.axios.get(`${this.url}/ads/${adId}`, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       return result.data.goal;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// }

