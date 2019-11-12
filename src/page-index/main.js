import '../js/index';
import '../scss/main.scss';
import './page.scss';
import '../js/cart';
import '../js/visa';
import { getShopData } from '../js/utils/api';
import store from '../js/store';
import { renderAll } from '../js/utils/helpers';




const categoriesArray = document.querySelector('.shopItems');
getShopData().then(resData => {
  store.shopData = resData;
  console.log('resData', resData)
  console.log('store', store)
  const popular = resData.filter(el => el.popular)
  console.log('popular :', popular);
  categoriesArray.innerHTML = renderAll(popular, 'popular');
})
