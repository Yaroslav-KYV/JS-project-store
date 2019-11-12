

// Modal
const modalOpen = document.querySelector(".accept-window");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".close-button");
const orderList = document.querySelector(".order-list");
const totalDom = document.querySelector(".total-dom")

modalOpen.addEventListener("click", e => {
  e.preventDefault();
  if(e.target.nodeName === "A" ||
  e.target.dataset.action === "openModal"){
    modalBg.classList.add("bg-active");
  }
});
modalBg.addEventListener("click", e => {
  if (
    (e.target.nodeName === "SPAN" &&
      e.target.dataset.action === "closeModalWindow") ||
    e.target.dataset.action === "closeModalOut"
  ) {
    modalBg.classList.remove("bg-active");
  }
});

window.addEventListener("keydown", e => {
  if (e.keyCode === 27 && modalBg.classList.contains("bg-active")) {
    modalBg.classList.remove("bg-active");
  }
});
// Order
const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');

const inLocalStorage = localStorage.getItem('carts')
const parseInLocal = JSON.parse(inLocalStorage) ;
console.log('parseInLocal', parseInLocal)


const totalOrder = () => {
  let totalCost = 0;
   let allPrice = parseInLocal.reduce((acc,item)=>{
     totalCost += item.price * item.quantity;
     return acc += `<li class="order-items">
     <img src="${item.image}" alt="" class="order-img" width="60px" height="60px">
     <div class="order-text">
       <p class="order-stuff">${item.name}</p>
       <p class="order-quantity">Quantity: ${item.quantity}</p>
       </div>
      <span class="order-stuff">${item.price * item.quantity} $</span>
     </li>`
   },'');
   orderList.innerHTML = allPrice;
   totalDom.insertAdjacentHTML("afterend",`<span class="order-cost">${totalCost} $</span>`);
}
totalOrder();



