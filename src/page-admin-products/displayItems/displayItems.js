
import { renderAll } from '../../js/utils/helpers';
import { getShopData, deleteItem } from '../../js/utils/api';
import store from '../../js/store';
import template from '../../js/utils/templateAdm.hbs'
// import {createListItem} from './editIte'

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
  EDIT: 'edit',
  DELETE: 'delete'
}


const goods = document.querySelector('.my-goods');


const deleteListItem = element => {

  const parentListItem = element.closest('.item');


   const idP = element.id;


   deleteItem(idP).then(resData => console.log('resData :', resData));
   parentListItem.remove();
  //  console.log('.item');

}


const handleListClick = ({ target }) => {

  const clo = target.closest('button');
  if (!clo ) return;

  const action = clo.dataset.action;


  switch (action) {
    case actions.DELETE:
      deleteListItem(clo);

      break;

    case actions.EDIT:
    // editFn(clo);
    console.log('edittt');
    createListItem()
      break;
  }
};



goods.addEventListener('click', handleListClick);
const isAdmin = true;

getShopData().then(resData => {
  store.shopData = resData;
  goods.innerHTML = renderAll(resData, isAdmin);
})













