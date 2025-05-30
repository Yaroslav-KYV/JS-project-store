import shopData from '../shoes.js';

const server = window.location.origin;
const serverURL =
      window.location.hostname.indexOf('localhost') !== -1
        ? 'http://localhost:3000'
        : server;
export const getShopData = () => {
  return fetch(`${serverURL}/shopapi/products`).then(res => res.json()).then(resData => resData.products.map(el => {
    el.image = serverURL + el.image;
    el.quantity = 1;
    return el
  })
  )
}


export const signIn = (userData) => {
  return fetch(`${serverURL}/shopapi/auth/signin`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
      body: JSON.stringify(userData)
  }).then(res => res.json());
}

export const newItemFetch = (formData, token) => {
  return fetch(`${serverURL}/shopapi/products`, {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
    },
    body: formData
  }).then(res => res.json()).then(resData => resData.products.map(el => {
    el.image = serverURL + el.image;
    el.quantity = 1;
    return el
  }));

}


export const updateItem = (data, token,editElemenId) => {
return fetch(`${serverURL}/shopapi/products/${editElemenId}`, {
    method: 'PUT',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

}

export const deleteItem = (id, token) => {
  return fetch(`${serverURL}/shopapi/products/${id}`, {
    method: 'DELETE',
    headers: {
        'Authorization': `Bearer ${token}`,
    },
}).then(res => res.json())

}
