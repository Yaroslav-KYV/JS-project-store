import '../scss/main.scss';
import './page.scss';
import '../js/brandSlider.js'
import '../js/visa.js'
import '../js/index';
import '../js/cart.js';
import { getShopData } from '../js/utils/api';
import store from '../js/store';
import { renderAll } from '../js/utils/helpers';

const categoriesArray = document.querySelector('.categories-array');

let markup = renderAll();
document.querySelector('.categories-array').innerHTML = markup;
getShopData().then(resData => {
  store.shopData = resData;
  console.log('store', store)
  categoriesArray.innerHTML = renderAll(resData);
})

const arrElms = document.querySelectorAll('.categories-menu__button');
const catMenu = document.querySelector('.categories-menu');

// document.querySelector('.allBut').classList.remove('active')

catMenu.addEventListener('click', (e)=> {
  if(e.target.nodeName === "BUTTON") {
    arrElms.forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
  }

  console.log(e.target.textContent);
  let filteredStore;
  if (e.target.textContent.toLowerCase() !== 'all') {
    filteredStore = store.shopData.filter(product => product.category === e.target.textContent.toLowerCase());
  } else {
    filteredStore = store.shopData;
  }
  console.log('filteredStore', filteredStore)
  categoriesArray.innerHTML = renderAll(filteredStore);
})

//    div#idapp
// copy js
// copy scss
