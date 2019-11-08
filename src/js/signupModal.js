const knopka = document.querySelector('.knopka');
console.log(knopka)
const modalWrapper = document.querySelector('.signup-modal__wrapper');
console.log(modalWrapper)

knopka.addEventListener('click', function (e) {
  e.preventDefault();
  modalWrapper.classList.add('active');
});
