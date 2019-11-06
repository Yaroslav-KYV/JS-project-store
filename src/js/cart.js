const cart = document.querySelector('.cart');
const cartTag = document.querySelector('.cart__tag');
const cartTagImage = document.querySelector('.cart__tagimage');

console.log(cartTagImage);
const cartOpenClose = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target === cartTag || event.target === cartTagImage) {
        cartTag.classList.toggle('cart__tag--isopen');
    }
}
cartTag.addEventListener('click', cartOpenClose);
console.log(cart);