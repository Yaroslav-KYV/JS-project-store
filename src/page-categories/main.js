import '../scss/main.scss';
import './page.scss';
import '../js/brandSlider.js'
import '../js/visa.js'
import '../js/index';
import '../js/cart.js';
import { getShopData } from '../js/utils/api';
import store from '../js/store';
import { renderAll } from '../js/utils/helpers';
import './rangeSlider';

const categoriesArray = document.querySelector('.categories-array');

getShopData().then(resData => {
  store.shopData = resData;
  categoriesArray.innerHTML = renderAll(resData);
})

const arrElms = document.querySelectorAll('.categories-menu__button');
const catMenu = document.querySelector('.categories-menu');

catMenu.addEventListener('click', (e)=> {
  if(e.target.nodeName === "BUTTON") {
    arrElms.forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
  }

  let filteredStore;
  if (e.target.textContent.toLowerCase() !== 'all') {
    filteredStore = store.shopData.filter(product => product.category === e.target.textContent.toLowerCase());
  } else {
    filteredStore = store.shopData;
  }
  categoriesArray.innerHTML = renderAll(filteredStore);
})

const brandName = document.getElementById('search-form');

brandName.addEventListener('submit', (e) => {
  e.preventDefault();
  const { size, color, brandName, input} = e.target.elements;
  const sizeValue = size.options[size.selectedIndex].value
  const brandNameValue = brandName.options[brandName.selectedIndex].value
  const colorValue = color.options[color.selectedIndex].value.toLowerCase()
  // const priceValue = rangeSlider()
  const priceMax = store.categoriesFilter.range[1];
  const priceMin = store.categoriesFilter.range[0];
  const priceMin = store.categoriesFilter.range[0];
  const filteredArr = store.shopData.filter((el) => (!input.value !== '' ? el.name.toLowerCase().includes(input.value.toLowerCase()) : true)
  && (brandNameValue !== 'all' ? el.brandName === brandNameValue : true)
  && (sizeValue !== 'all' ? el.size === +sizeValue : true)
  && (colorValue !== 'all' ? el.color === colorValue : true)
  // console.log('store.categoriesFilter.range', store.categoriesFilter.range)
  && (el.price >= priceMin && el.price <= priceMax))
  console.log('filteredArr', filteredArr)
  categoriesArray.innerHTML = renderAll(filteredArr);
})
