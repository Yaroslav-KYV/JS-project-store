// https://api.telegram.org/bot1066699751:AAHO2hGHCBm148lTSEL3Kk61lTtLlyiopz4/sendMessage?chat_id=-271320444&text='message'

const userPhone = document.querySelector('.user_phone');
const button = document.querySelector('.callback__button');

const token = '1066699751:AAHO2hGHCBm148lTSEL3Kk61lTtLlyiopz4';
const chat_id = '-271320444';
let txt;

button.addEventListener('click', (e) => {
	
  e.preventDefault();

  if (userPhone.value !== '' && Number(userPhone.value) && userPhone.value >= '5') {
    txt = userPhone.value;
    const api = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${txt}`
    fetch(`${api}`)
  };

  userPhone.value = '';
})
