import '../js/index';
import '../scss/main.scss';
import './page.scss';
import '../js/cart';
import '../js/visa';


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

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
