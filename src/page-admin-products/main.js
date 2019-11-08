import '../scss/main.scss';
import './page.scss';
import './login.scss';




const addItemForm = document.querySelector('.AddNewItem');
const addItemButton = document.querySelector('.addItemButton');




const newItem = [];

addItemForm.addEventListener('submit', takeData)

function takeData(e){
  e.preventDefault();
  const { image, price, description, fullDescription, name } = e.target.elements;
  const obj = {
    image: image.files[0],
    price: price.value,
    description: description.value,
    fullDescription: fullDescription.value,
    name: name.value,
 };
  console.log('obj', obj);

  const formData  = new FormData();
  Object.keys(obj).forEach(key => {
      formData.append(key, obj[key]);
  })
}








