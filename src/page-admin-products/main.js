import '../scss/main.scss';
import '../js/index';
import './page.scss';
import './login.scss';
import { signIn } from '../js/utils/api';
import { newItemFetch, updateItem } from '../js/utils/api';
import { renderAll } from '../js/utils/helpers';
import store from '../js/store';
import '../js/visa';
import './displayItems/displayItems';





const addItemForm = document.querySelector('.AddNewItem');
const loginFrom = document.querySelector('.login');
const select = document.querySelector('.select');
const loginButton = document.querySelector('.loginButton');
const loginContainer = document.querySelector('.adminContainer');

const addItemWrapper = document.querySelector('.addItemContainer');
const myGoods = document.querySelector('.my-goods');

let token = localStorage.getItem('admin');

if(token) {
  onAuthSuccess(token);
}





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
  signIn(loginCheck).then(resData => {
    console.log('resData', resData);
    if(resData.success && resData.token) {
      localStorage.setItem('admin', resData.token);
      onAuthSuccess(token);
    }
  })

})

function onAuthSuccess(token) {
    store.admin = {
      token: token,
      auth: true,
    }
    addItemWrapper.style.display = "block";
    myGoods.style.display = "block";
    loginContainer.style.display = "none";

  }


addItemForm.addEventListener('submit', takeData)

export function takeData(e, type, editElemenId){
  e.preventDefault();
  const { image, price, description, fullDescription, name ,brandName ,size ,color } = e.target.elements;
  console.log('select.options[select.selectedIndex].value,', select.options[select.selectedIndex].value,)
  const category = select.options[select.selectedIndex].value;
  const obj = {
    price: price.value,
    description: description.value,
    fullDescription: fullDescription.value,
    name: name.value,
    brandName: brandName.value,
    size: size.value,
    color: color.value,
    category,
    categories: JSON.stringify([{title: 'Men', titleValue: 'men', value: checkCat('men', category)}, {title: 'Women', titleValue: 'women', value: checkCat('women', category)}, {title: 'Kids', titleValue: 'kids', value: checkCat('kids', category)}]),
 };

 if(image && image.files[0]) {
  obj.image = image.files[0];
 }

 function checkCat(current, active) {
   console.log('current :', current);
   console.log('active :', active);
   return current === active
 }

  console.log('obj', obj);

  const formData  = new FormData();
  Object.keys(obj).forEach(key => {
      formData.append(key, obj[key]);
  })
  if(store.admin.token) {
    if(type === 'update') {
      updateItem(obj, store.admin.token, editElemenId).then(resData => {
        console.log('resData', resData);
        
      })
    } else {
      newItemFetch(formData, store.admin.token).then(resData => {
        console.log('resData', resData);
        store.shopData = resData;
        console.log('store :', store);
        myGoods.innerHTML = renderAll(resData);
      })
    }

  }

}





