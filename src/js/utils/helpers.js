import catTempl from './template.hbs';
import catTemplAdm from './templateAdm.hbs';

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

const server = 'http://myshop.com.ua'
const serverURL =
      window.location.hostname.indexOf('localhost') !== -1
        ? 'http://localhost:3000'
        : server;




export function renderAll(shopData, isAdmin = false) {
  filtered.men.items = [];
  filtered.women.items = [];
  filtered.kids.items = [];

  shopData.forEach(el => {
    const image = serverURL  + el.image;
    el.image = image;
    if(el.category === 'men') {
      filtered.men.items.push(el);
    } else if(el.category === 'women') {
      filtered.women.items.push(el);
    } else {
      filtered.kids.items.push(el);
    }
  })

console.log(filtered);
  let markup = '';
  Object.keys(filtered).forEach(key => {
    if(filtered[key].items.length > 0) {
      if(isAdmin) {
        markup += catTemplAdm(filtered[key]);

      }else {

        markup += catTempl(filtered[key]);
      }
    }
  })
  return markup;
}
