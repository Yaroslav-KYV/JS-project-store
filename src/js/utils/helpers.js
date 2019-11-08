import catTempl from './template.hbs';


export function renderAll(filteredData) {
  let markup = '';
  Object.keys(filteredData).forEach(key => {
    if(filteredData[key].items.length > 0) {
      markup += catTempl(filteredData[key]);
    }
  })
  return markup;
}
