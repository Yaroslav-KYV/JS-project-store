import '../js/index';
import '../scss/main.scss';
import './page.scss';
import '../js/cart.js';
// import 'slick-carousel';
// import 'slick-carousel/slick/slick.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

$('.slider_offer__list').slick();

class Foo {
  constructor () {
    this.value = 'foobar'
  }
  static instance () {
    return new Foo()
  }
  getValue () {
    return this.value
  }
}

console.log(Foo.instance().getValue())
