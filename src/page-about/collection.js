import collection from './collection.hbs';
import store from '../js/store';
import {getShopData} from '../js/utils/api';

getShopData().then(resData => {
    store.shopData = resData;
    console.log('resData', resData)
    console.log('store', store)
    // рендерю коллекцию на страничку модалки
    const containerCollection = document.querySelector('.collection-shoes');
    
    if (containerCollection) {   
        const markup = store.shopData.map(item => collection(item)).join('');
        containerCollection.insertAdjacentHTML('beforeend', markup);
    };
    
})


const openCollectionBtn = document.querySelector('.open-new-collection');
const closeModalArea = document.querySelector('.js-backdrop-collection');
const closeButton = document.querySelector('.close-collection');

// вешаю слушателя на кнопки открытия и закрытия модалки
openCollectionBtn.addEventListener('click', openCollection);
closeModalArea.addEventListener('click', closeCollection);
closeButton.addEventListener('click', closeBtn)


// функция открытия модалки
function openCollection() {
    document.body.classList.add("show-collection");
    window.addEventListener('keydown', closeEscspeBtn);
};

// функция закрытия модалки кликом на серый фон
function closeCollection(e) {
    if(e.target === closeModalArea) {
        document.body.classList.remove("show-collection");
        window.removeEventListener("keydown", closeModalESC);
    }
  
};

// функция закрытия модалки кликом на кнопку Escape
function closeEscspeBtn(e) {
    if(e.code !== 'Escape') {
        return;
    }
    // closeCollection();
    document.body.classList.remove("show-collection");
};

function closeBtn(e) {
    if(e.target !== closeButton) {
        return
    }
    document.body.classList.remove("show-collection");
};