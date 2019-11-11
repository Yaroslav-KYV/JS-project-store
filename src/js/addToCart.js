import store from './store';
import updateCartContainer from './cart.js';

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
    const targetEl = store.shopData.find(el => el._id === id);
    // console.log('targetEl', targetEl)
    if(store.cart.length === 0){
      targetEl.quantity += 1;
    }else if(store.cart.length > 0){
      store.cart.forEach((item, i) => {
        if(item._id === targetEl._id){
          store.cart.splice(i, 1);
        }
      })
      targetEl.quantity += 1;
    }
    store.cart.push(targetEl)
    // else if(store.cart._id === id){
    //   targetEl.quantity += 1;
    // }
    // console.log('store.cart', store.cart)
    localStorage.setItem('carts', JSON.stringify(store.cart));
    updateCartContainer();
  }
})


