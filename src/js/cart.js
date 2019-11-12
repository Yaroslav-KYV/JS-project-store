const cartItems = document.querySelector('.cart__items');
const cartTag = document.querySelector('.cart__tag');
const cartTagImage = document.querySelector('.cart__tagimage');
const totalPrice = document.querySelector('.cart__totalprice');
const cartNotifier = document.querySelector('.cart__tag__notifier');

// import itemsFromTestArray from '../page-categories/shoes.js'
import store from './store';


let totPrice = 0;
let totQuantity = 0;

const storageCart = localStorage.getItem('carts') && JSON.parse(localStorage.getItem('carts')) || []

if(storageCart.length > 0) {
    store.cart = storageCart;
}

/* calculate total price and update it on DOM */
const updateTotalPrice = () => {
    let price = store.cart.reduce((acc, cur) => {
        return acc += Number(cur.price) * Number(cur.quantity);
    }, 0);
    totalPrice.textContent = price;
}

/* Quantity items notifier for cart tag */
const cartItemsNotifier = () => {

    if (cartTag.classList.contains('cart__tag--isopen')) {
        cartNotifier.classList.remove('cart__tag__notifier--enabled');
    } else if (!cartTag.classList.contains('cart__tag--isopen') && localStorage.getItem('carts') && JSON.parse(localStorage.getItem('carts')).length > 0) {
        cartNotifier.classList.add('cart__tag__notifier--enabled');
        cartNotifier.textContent = totQuantity;
    }
}

/* taking order and place it to DOM */

const repaintCartContainer = () => {
    totPrice = 0;
    totQuantity = 0;
    let stringPutToDom = store.cart.reduce((acc, cur) => {
        totPrice += cur.price * cur.quantity;
        totQuantity += cur.quantity;
        return acc += `<li class="cart_item" data-id="${cur._id}">
            <img class="cart__item__img" src="${cur.image}" width="60px" height="60px" alt="">
            <div class="cart__descwrapper">
                <div class="cart__item__description">
                    <span class="cart__item__name">${cur.name}</span>
                    <span class="cart__item__price">${cur.price}$</span>
                </div>
                <div class="quantity">
                    <svg class="cart__item__qty__minus" data-but="minus" width="15px" height="15px">
                        <use href="../img/minus-item.svg#Capa_1" fill="#666"></use>
                    </svg>
                    <span class="cart__item__qty">${cur.quantity}</span>
                    <svg class="cart__item__qty__plus" data-but="plus" width="15px" height="15px">
                        <use href="../img/plus-item.svg#Capa_1" fill="#666"></use>
                    </svg>
                </div>
            </div>
            <svg class="cart__remove__item" data-but="remove" width="20px" height="20px">
                <use href="../img/close-item-cart.svg#Capa_1" fill="#fff"></use>
            </svg>
        </li>`;
    }, '');

  if(cartItems) {
    cartItems.innerHTML = stringPutToDom;
    document.querySelector('.cart__totalprice').textContent = totPrice;
    cartItemsNotifier();

  }
};

/* exporting function to use it in addCart.js */
export const updateCartContainer = () => {
    repaintCartContainer();
}

/* add/remove class to Cart body container */
const cartOpenClose = (event) => {
    if (event.target === cartTag || event.target === cartTagImage) {
        cartTag.classList.toggle('cart__tag--isopen');
        repaintCartContainer();
    }
}

/* this function contain methods to remove item/increase...decrease quantity */
const removeItem = (event) => {
    event.preventDefault();
    event.target.onmousedown = event.target.onselectstart = function() {
        return false;
      };
    let currentItem = event.target.closest('.cart_item');
    let closestQuantityItem;

    if (event.target.dataset.but === 'remove' || event.target.parentNode.dataset.but === 'remove') {

        store.cart.forEach((item, i) => {
            if (item._id === currentItem.dataset.id) {
                store.cart.splice(i, 1);
                localStorage.setItem('carts', JSON.stringify(store.cart));
                store.cart = store.cart;
                console.log(store.cart);
                console.log('store.cart', store.cart);

            };
        updateCartContainer();
        });
    } else

    if (event.target.dataset.but === 'minus' || event.target.parentNode.dataset.but === 'minus') {

        closestQuantityItem = event.target.closest('.quantity').querySelector('.cart__item__qty');

        store.cart.forEach((item) => {
            if (item._id === currentItem.dataset.id && item.quantity >= 2) {
                item.quantity -= 1;
                localStorage.setItem('carts', JSON.stringify(store.cart));
                closestQuantityItem.textContent = item.quantity;
                updateTotalPrice();

            };
        });
    } else

    if (event.target.dataset.but === 'plus' || event.target.parentNode.dataset.but === 'plus') {

        closestQuantityItem = event.target.closest('.quantity').querySelector('.cart__item__qty');

        store.cart.forEach((item) => {
            if (item._id === currentItem.dataset.id && item.quantity <= 98) {
                item.quantity += 1;
                localStorage.setItem('carts', JSON.stringify(store.cart));
                closestQuantityItem.textContent = item.quantity;
                updateTotalPrice();

            };
        });
    };

};


/* Listener for Cart Tag */
cartTag.addEventListener('click', cartOpenClose);

/* Listener for Remove item ico */
cartItems.addEventListener('click', removeItem)
