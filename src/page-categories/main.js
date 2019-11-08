import '../scss/main.scss';
import './page.scss';
import '../js/brandSlider.js'
import '../js/visa.js'
import '../js/index';
import '../js/cart.js';
import store from './shoes.js';
import { renderAll } from '../js/utils/helpers';

let men = [];
let women = [];
let kids = [];




let markup = renderAll();

document.querySelector('.categories-array').innerHTML = markup;

const arrElms = document.querySelectorAll('.categories-menu__button');
const catMenu = document.querySelector('.categories-menu');

catMenu.add.eventListener('click', ()=> {
  if(e.target.nodeName === "BUTTON") {
    arrElms.forEach(el => el.classList.remove('active'))
    e.target.className.add
  }

  store.filtered(el => el.category)
})
