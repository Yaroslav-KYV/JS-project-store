import '../scss/main.scss';
import './page.scss';
import list from './list.hbs';
import '../js/visa';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-about');
  document.body.insertAdjacentHTML('beforeend', list());
});
