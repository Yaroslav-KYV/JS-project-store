import { getShopData } from './utils/api';
import store from './store';
import './addToCart';


getShopData().then(resData => {
  store.shopData = resData;
});

let toggled = false;
const nav = document.getElementsByClassName('nav')[0];
const btn = document.getElementsByClassName('nav-tgl')[0];
btn.onclick = function(evt) {
  if (!toggled) {
    toggled = true;
    evt.target.classList.add('toggled');
    nav.classList.add('active');
    document.body.style.overflow = "hidden"
  } else {
    toggled = false;
    evt.target.classList.remove('toggled');
    nav.classList.remove('active');
    document.body.style.overflow = "auto"
  }
}




