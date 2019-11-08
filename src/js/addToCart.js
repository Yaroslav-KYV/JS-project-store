import store from './store';

const itemButton = document.querySelector('.item_button')
const categories = document.body;



categories.addEventListener('click', (e) => {
  if(
    e.target.nodeName === "BUTTON" &&
    e.target.dataset.action === "ADD_TO_CART"
  ){
    const id = e.target.dataset.id ;
    store.shopData.find()
    store.cart.push()
    // add store.cart to localStorage
  }
})
