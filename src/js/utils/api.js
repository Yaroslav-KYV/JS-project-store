import shopData from '../shoes.js'
export const getShopData = () => {

  return Promise.resolve(shopData)

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
