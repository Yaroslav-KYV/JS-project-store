const visa = document.querySelector('.footer-visa');
// console.log('visa', visa)
const mastercard = document.querySelector('.footer-mastercard');
// console.log('mastercard', mastercard)
const modalWrapper = document.querySelector('.modal__wrapper');
const modalWrapperV = document.querySelector('.modal__wrapper-v');
const modalWrapperM = document.querySelector('.modal__wrapper-m');
const modalTitle = modalWrapper.querySelector('.modal__title');
const modalClose = document.querySelector('.close');

const visaTitle = document.querySelector('.modal-title__visa');
const mastercardTitle = document.querySelector('.modal-title__mastercard');

visa.addEventListener('click', function (e) {
  e.preventDefault();
//   modalTitle.textContent = visaTitle.textContent;
  modalWrapperV.classList.add('active');

});

mastercard.addEventListener('click', function (e) {
  e.preventDefault();
//   modalTitle.textContent = mastercardTitle.textContent;
  modalWrapperM.classList.add('active');  
});


modalWrapper.addEventListener('click', function (e) {
   if (
    e.target.nodeName === 'BUTTON' ||
    e.target === e.currentTarget
  ) {
    modalWrapper.classList.remove('active');
  } else if (e.currentTarget === modalWrapper) {
    modalWrapper.classList.remove('active');
  }
})


window.addEventListener('keydown', function (e) {
  if (
    e.keyCode === 27 &&
    modalWrapper.classList.contains('active')
  ) {
    modalWrapper.classList.toggle('active');
  }
})
