const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})


// geocode('Philadelphia', (error, data) => {
//   if(error){
//     console.log('Error: ', error);
//   }else{
//     console.log('Data: ', data);
//   }
// });