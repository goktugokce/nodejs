//object creation

// const name = 'Goko';
// const userAge = 27;

// const user = {
//   name,
//   age:userAge,
//   location:'Izmir'
// }

// console.log(user);


// //object destructuring

const product = {
  label:'red notebook',
  price:3,
  stock:201,
  salesPrice:undefined,
  rating:4.2
}

// // const label = product.label;
// // const stock = product.stock;

// const {label, stock, rating = 5} = product;
// console.log(label);
// console.log(stock);
// console.log(rating);



const transaction = (type, {label, stock}) => {
  console.log(type, label, stock);
}

transaction('order', product);