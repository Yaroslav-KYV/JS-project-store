import shopData from '../shoes.js'
export const getShopData = () => {

  return Promise.resolve(shopData)

}


export const signUp = (userData) => {
  return fetch('http://localhost:3000/api/auth/signin', {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
      body: JSON.stringify(userData)
  }).then(res => res.json());
}

export const newItemFetch = (formData, token) => {
  return fetch('http://localhost:3000/api/products', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
    },
    body: formData
  }).then(res => res.json());

}

export const deleteItem = (id, token) => {
//   fetch(`http://localhost:3000/api/products/${id}`, {
//     method: 'DELETE',
//     headers: {
//         'content-type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//     },
// }).then(res => res.json())
  return Promise.resolve({message: `success! id: ${id} is deleted`});
}
