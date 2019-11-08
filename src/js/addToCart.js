import store from './store';

const itemButton = document.querySelector('.item_button')
const categories = document.body;


categories.addEventListener('click', (e) => {
  if(
    e.target.nodeName === "BUTTON"
    &&
    e.target.dataset.action === "ADD_TO_CART"
  ){
    const id = e.target.dataset.id;
    console.log('id', id)
    const targetEl = store.shopData.find(el => el._id === id);
  }
  console.log('targetEl', targetEl)
  store.cart.push(targetEl)
  console.log('store.cart', store.cart)
  localStorage.setItem('carts', JSON.stringify(store.cart));
})


//{quantity: 1}
// targetEl.quantity = 0;
// if(targetEl.quantity === 1){
//   targetEl.quantity += 1;



// const getCartsLocal = localStorage.getItem('carts');
// console.log('getcard:', getCartsLocal)
// const cartsItems = JSON.parse(getCartsLocal);
// console.log('cartsItems', cartsItems)
// localStorage.getItem('cart')
// localStorage.setItem('cart', JSON.stringify(store.cart));
// console.log('localStorage.getItem(cart);', localStorage.getItem('cart'));

