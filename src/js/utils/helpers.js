import catTempl from './template.hbs';
import catTemplAdm from './templateAdm.hbs';
import popularTempl from './popular.hbs';

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






export function renderAll(shopData, type = null) {
  filtered.men.items = [];
  filtered.women.items = [];
  filtered.kids.items = [];

  shopData.forEach(el => {
    const product = {...el}
    if(product.category === 'men') {
      filtered.men.items.push(product);
    } else if(product.category === 'women') {
      filtered.women.items.push(product);
    } else {
      filtered.kids.items.push(product);
    }
  })

console.log(filtered);
  let markup = '';
  Object.keys(filtered).forEach(key => {
    if(filtered[key].items.length > 0) {
      if(type === 'admin') {
        markup += catTemplAdm(filtered[key]);

      }else if (type === 'popular') {

        markup += popularTempl(filtered[key]);
      }else {

        markup += catTempl(filtered[key]);
      }
    }
  })
  return markup;
}
