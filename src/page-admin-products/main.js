import '../scss/main.scss';
import './page.scss';
import './login.scss';
import { signUp } from '../js/utils/api';
import { newItemFetch } from '../js/utils/api';
import { shopData } from '../js/utils/api';
import store from '../js/store';
import '../js/visa';
import './displayItems/displayItems';





const addItemForm = document.querySelector('.AddNewItem');
const loginFrom = document.querySelector('.login');
const select = document.querySelector('.select');
const loginButton = document.querySelector('.loginButton');
const loginContainer = document.querySelector('.adminContainer');

const addItemWrapper = document.querySelector('.addItemContainer');



loginFrom.addEventListener('submit',e => {
  e.preventDefault();
  const {email, password} = e.target.elements;
  const loginCheck = {
    email: email.value,
    password: password.value,
  }
  console.log('login :', loginCheck);
  const formDataSign  = new FormData();

  Object.keys(loginCheck).forEach(key => {
      formDataSign.append(key, loginCheck[key]);
  })
  signUp(loginCheck).then(resData => {
    console.log('resData', resData);
    if(resData.success && resData.token) {
      store.admin = {
        token: resData.token,
        auth: true,
      }
      addItemWrapper.style.display = "block";
      loginContainer.style.display = "none";
    }
  })
})


const newItem = [];

addItemForm.addEventListener('submit', takeData)

export function takeData(e){
  e.preventDefault();
  const { image, price, description, fullDescription, name , category} = e.target.elements;
  const obj = {
    image: image.files[0],
    price: price.value,
    description: description.value,
    fullDescription: fullDescription.value,
    name: name.value,
    category: select.options[select.selectedIndex].value,
 };
  console.log('obj', obj);

  const formData  = new FormData();
  Object.keys(obj).forEach(key => {
      formData.append(key, obj[key]);
  })
  if(store.admin.token) {
    newItemFetch(formData, store.admin.token).then(resData => {
      console.log('resData', resData);
      store.shopData = resData.products;
      console.log('store :', store);
    })

  }

}





