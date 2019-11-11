import store from './store';
import {updateCartContainer} from './cart.js';

const itemButton = document.querySelector('.item_button')
const categories = document.body;


categories.addEventListener('click', (e) => {
  if(
    e.target.nodeName === "BUTTON"
    &&
    e.target.dataset.action === "ADD_TO_CART"
  ){
    const id = e.target.dataset.id;
    // console.log('id', id)
    const targetEl = {...store.shopData.find(el => el._id === id)};
    const find = store.cart.find(el => el._id === targetEl._id);
    console.log('targetEl', targetEl)
    console.log('find :', find);
    if(find){
      find.quantity += 1;
    } else {
      store.cart.push(targetEl)
    }
    // else if(store.cart.length > 0){
    //   store.cart.forEach((item, i) => {
    //     if(item._id === targetEl._id){
    //       store.cart.splice(i, 1);
    //     }
    //   })
    //   targetEl.quantity += 1;
    // }
    // else if(store.cart._id === id){
    //   targetEl.quantity += 1;
    // }
    localStorage.setItem('carts', JSON.stringify(store.cart));
    updateCartContainer();
    console.log('store.cart', store.cart)
  }
})


