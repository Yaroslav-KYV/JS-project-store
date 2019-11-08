import '../scss/main.scss';
import './page.scss';
import '../js/brandSlider.js'
import '../js/index';
import '../js/cart.js';


import store from '../js/shoes';
import { renderAll } from '../js/utils/helpers';


// Store creating

let men = [];
let women = [];
let kids = [];

const filtered = {
  men: {
    title: 'Men',
    items: [],
  },
  women: {
    title: 'Women',
    items: [],
  },
  kids: {
    title: 'Kids',
    items: [],
  }
}

store.forEach(el => {
  if(el.category === 'men') {
    filtered.men.items.push(el);
  } else if(el.category === 'women') {
    filtered.women.items.push(el);
  } else {
    filtered.kids.items.push(el);
  }
})

console.log(filtered);

document.querySelector('.categories-array').innerHTML = renderAll(filtered);

const arrElms = document.querySelectorAll('.categories-menu__button');
const catMenu = document.querySelector('.categories-menu');

catMenu.add.eventListener('click', ()=> {
  if(e.target.nodeName === "BUTTON") {
    arrElms.forEach(el => el.classList.remove('active'))
    e.target.className.add
  }

  store.filtered(el => el.category)
})




//    div#idapp
// copy js
// copy scss
