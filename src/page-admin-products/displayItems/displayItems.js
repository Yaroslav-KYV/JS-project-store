// import displayItems from './displayItems.hbs';
// import displayItemsStyle from './displayItems.css';
// import displayProductSection from './displayProductSection.css'
import { renderAll } from '../../js/utils/helpers';
import { getShopData } from '../../js/utils/api';
import store from '../../js/store';

const categoriesArray = document.querySelector('.categories-array');

const isAdmin = true;

getShopData().then(resData => {
  store.shopData = resData;
  categoriesArray.innerHTML = renderAll(resData, isAdmin);
})

categoriesArray.addEventListener('click', (e) => {




})

// refs : {
// newAdBut: document.querySelector(".addItem")
// }

// services.getAll().then(data => {




//   data.docs.map(elem => {

//     const markup = templateDisplayAdsCards(elem, {...elem.images = [elem.images[0]]});
//     services.refs.adsContainer.insertAdjacentHTML('afterbegin', markup);
//   })

// });



// async getAll() {

//   try {
//     const result = await this.axios.get(`${this.url}/ads/all`);
//     return result.data.ads;
//   } catch (error) {
//     throw new Error(error);
//   }
// }


