import '../scss/main.scss';
import './page.scss';
import '../js/brandSlider.js';
import '../js/visa.js';
import '../js/index';
import '../js/cart.js';
import { getShopData } from '../js/utils/api';
import store from '../js/store';
import { renderAll } from '../js/utils/helpers';
import './rangeSlider';
import '../js/signupModal';
import '../js/callback';



const categoriesArray = document.querySelector('.categories-array');
getShopData().then(resData => {
  store.shopData = resData;
  console.log('resData', resData)
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

const brandName = document.getElementById('search-form');

brandName.addEventListener('submit', (e) => {
  e.preventDefault();
  const { size, color, brandName, input} = e.target.elements;
  console.log('size', size.options)
  console.log('size.value', size.options[size.selectedIndex].value)
  const sizeValue = size.options[size.selectedIndex].value
  const brandNameValue = brandName.options[brandName.selectedIndex].value.toLowerCase()
  const colorValue = color.options[color.selectedIndex].value
  const filteredArr = store.shopData.filter((el) => (!input.value !== '' ? el.name.toLowerCase().includes(input.value.toLowerCase()) : true)
  && (brandNameValue !== 'all' ? el.brandName === brandNameValue : true)
  && (sizeValue !== 'all' ? el.size === +sizeValue : true)
  && (colorValue !== 'all' ? el.color === colorValue : true))
  console.log('filteredArr', filteredArr)
  categoriesArray.innerHTML = renderAll(filteredArr);
})

