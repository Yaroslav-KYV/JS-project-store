import '../scss/main.scss';
import './page.scss';




const addItemForm = document.querySelector('.AddNewItem');
const addItemButton = document.querySelector('.addItemButton');

console.log(addItemButton);


const newItem = [];

addItemForm.addEventListener('submit', takeData)

function takeData(e){
  e.preventDefault();
  const { name, price, image,  } = e.target.elements;
  const obj = {
    image: image.files[0],
    price: price.value,
  };
  console.log('obj', obj);

  const formData  = new FormData();
  Object.keys(obj).forEach(key => {
      formData.append(key, data[key]);
  })
}



// const postToAdd = {
//   author: 'Mango',
//   body: 'CRUD is awesome',
// };




// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(postToAdd),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));





