const cart = document.querySelector('.cart');
const cartTag = document.querySelector('.cart__tag');
const cartTagImage = document.querySelector('.cart__tagimage');


const cartOpenClose = (event) => {

    if (event.target === cartTag || event.target === cartTagImage) {
        cartTag.classList.toggle('cart__tag--isopen');
    }
}
cartTag.addEventListener('click', cartOpenClose);
