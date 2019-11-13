const modalWrapper = document.querySelector('.signup-modal__wrapper');
const signupModal = document.querySelector('.signup-modal');
const close = document.querySelector('.signup-modal__close');
const email = document.querySelector('#email')
const signUp = document.querySelector('.signup-modal__btn')



setTimeout(() => {
  modalWrapper.classList.add('active')
}, 60000);

window.addEventListener('keydown', function (e) {
  if (
    e.keyCode === 27 &&
    modalWrapper.classList.contains('active')
  ) {
    modalWrapper.classList.toggle('active');
  }
})

modalWrapper.addEventListener('click', function (e) {
  if (
    e.target === close) {
    modalWrapper.classList.remove('active');
  }
})

signUp.addEventListener('click', (e) => {
  e.preventDefault

})

// проверка email и date
// куда отправлять?
// если уже заполнял, чтобы больше не показывал

  //   function validate(form_id, email) {
  //     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  //     var address = document.forms[form_id].elements[email].value;
  //     if (reg.test(address) == false) {
  //       alert('Введите корректный e-mail');
  //       return false;
  //     }
  //   }
