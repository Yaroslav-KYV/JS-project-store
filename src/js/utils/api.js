export const getShopData = () => {
  const shopData = [
    {
      brandName: "Nike",
      description: "",
      descriptionFull: "",
      category: "women",
      image: "",
      name: "",
      popular: false,
      price: 0,
      size: 36,
      type: "Кросoвки",
      _id: "5dc3ccbd92a65308ab3ab8f8",
    },
    {
      brandName: "Nike",
      description: "",
      descriptionFull: "",
      category: "men",
      image: "",
      name: "",
      popular: false,
      price: 0,
      size: 36,
      type: "Кросoвки",
      _id: "5dc3asd5308ab3ab8f8",
    },
    {
      brandName: "Nike",
      description: "",
      descriptionFull: "",
      category: "kids",
      image: "",
      name: "",
      popular: false,
      price: 0,
      size: 36,
      type: "Кросoвки",
      _id: "5dc3ccbd92a65308ab3ab8f8",
    },
    {
      brandName: "Nike",
      description: "",
      descriptionFull: "",
      category: "women",
      image: "",
      name: "",
      popular: false,
      price: 0,
      size: 36,
      type: "Кросoвки",
      _id: "5dc3ccbd92a65308ab3ab8f8",
    },
    {
      brandName: "Nike",
      description: "",
      descriptionFull: "",
      category: "men",
      image: "",
      name: "",
      popular: false,
      price: 0,
      size: 36,
      type: "Кросoвки",
      _id: "5dc3asd5308ab3ab8f8",
    },
    {
      brandName: "Nike",
      description: "",
      descriptionFull: "",
      category: "kids",
      image: "",
      name: "",
      popular: false,
      price: 0,
      size: 36,
      type: "Кросoвки",
      _id: "5dc3ccbd92a65308ab3ab8f8",
    },
    {
      brandName: "Nike",
      description: "",
      descriptionFull: "",
      category: "women",
      image: "",
      name: "",
      popular: false,
      price: 0,
      size: 36,
      type: "Кросoвки",
      _id: "5dc3ccbd92a65308ab3ab8f8",
    },
    {
      brandName: "Nike",
      description: "",
      descriptionFull: "",
      category: "men",
      image: "",
      name: "",
      popular: false,
      price: 0,
      size: 36,
      type: "Кросoвки",
      _id: "5dc3asd5308ab3ab8f8",
    },
    {
      brandName: "Nike",
      description: "",
      descriptionFull: "",
      category: "kids",
      image: "",
      name: "",
      popular: false,
      price: 0,
      size: 36,
      type: "Кросoвки",
      _id: "5dc3ccbd92a65308ab3ab8f8",
    },
    {
      brandName: "Nike",
      description: "",
      descriptionFull: "",
      category: "women",
      image: "",
      name: "",
      popular: false,
      price: 0,
      size: 36,
      type: "Кросoвки",
      _id: "5dc3ccbd92a65308ab3ab8f8",
    },
    {
      brandName: "Nike",
      description: "",
      descriptionFull: "",
      category: "men",
      image: "",
      name: "",
      popular: false,
      price: 0,
      size: 36,
      type: "Кросoвки",
      _id: "5dc3asd5308ab3ab8f8",
    },
    {
      brandName: "Nike",
      description: "",
      descriptionFull: "",
      category: "kids",
      image: "",
      name: "",
      popular: false,
      price: 0,
      size: 36,
      type: "Кросoвки",
      _id: "5dc3ccbd92a65308ab3ab8f8",
    },
  ]

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


