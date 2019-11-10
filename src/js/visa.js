const visa = document.querySelector('.footer-visa');
const mastercard = document.querySelector('.footer-mastercard');
const modalWrapper = document.querySelector('.footer-modal__wrapper');
const footerModalH2 = document.querySelector('.footer-modal__h2');
const footerModalP = document.querySelector('.footer-modal__p');


visa.addEventListener('click', function (e) {
  e.preventDefault();
  modalWrapper.classList.add('active');
  footerModalH2.textContent = `Verified by Visa`;
  footerModalP.innerHTML = `Payment systems in partnership with issuing banks are introducing modern cardholder identity verification schemes to make online shopping more secure. A special password is set for each operation performed, and this gives you confidence that only you can make such purchases online. Modern technological solutions are necessary to ensure that the cardholder is confident in the security of the transaction and that he is dealing with a real (and not “fake”) store.
  <br><br> One of these technological solutions is called Verified by Visa.
  <br><br> Verified by Visa is a new security system that notifies online merchants participating in the program and banks that you are the actual owner of the card when you make online purchases. It allows you to use a personal password to confirm your identity and protect your Visa card when you use it on the Internet, giving you great confidence in the actions you perform.
  <br><br> Verified by Visa technology is easy to connect, easy to use, the service is valid for all Visa cards.
  <br><br> To activate the Verified by Visa service for your card, you must contact your bank.
  `;
});

mastercard.addEventListener('click', function (e) {
  e.preventDefault();
  modalWrapper.classList.add('active');
  footerModalH2.textContent = 'MasterCard® SecureCode™';
  footerModalP.innerHTML = `MasterCard® SecureCode ™ is a technology that provides your MasterCard® or Maestro® card with an additional secret code that protects it from unauthorized use while shopping at participating stores.
  <br><br> To connect SecureCode technology, you must contact the bank that issued your card. Your secret code will be known only to you and your bank. Further, each time you pay for purchases or services in online stores participating in the program, your bank will offer you to enter this secret code, which you will receive on your mobile phone registered with the bank. Only after verification and confirmation by the bank of this code will the payment transaction be made. The procedure for using SecureCode technology is as simple as entering a PIN code at an ATM.
  <br><br> By entering the correct SecureCode during the purchase process, you confirm that you are an authorized card holder. If the wrong SecureCode is entered, the purchase will not be completed. Even if someone knows your payment card number, without SecureCode you won’t be able to pay for your purchase in the online stores participating in the program.
  `;
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
