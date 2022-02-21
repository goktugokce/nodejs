const request = require('request');

const weather_url = 'http://api.weatherstack.com/current?access_key=179e304ba8eae4b428944234999d878b&query=37.8267,-122.4233'
const webbox_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ29rdHVnb2tjZSIsImEiOiJja3p3dGdjZmQxeTJ5Mm5wa3B3b2NyMWF6In0.M-W7coZmht8HfXf8Tiw1gg';

request({url: weather_url, json:true}, (error, response) => {
  if(error){
    console.log('Unable to connect');
  }
  else if(response.body.error){
    console.log('Unable to find location');
  }
  else{
    const data = response.body.current;
    const temp = data.temperature;
    const precip = data.precip;
    const feelslike = data.feelslike;
    console.log(`${data.weather_descriptions[0]}. It is currently ${temp} degrees but feels like ${feelslike}. There is a ${precip}% chance of rain`);
  }
});


request({url:webbox_url, json:true}, (error, response) => {
  if(error){
    console.log('Unable to connect');
  }
  else if(response.body.message){
    console.log('Unable to locate');
  }
  else{
    const data = response.body;
    const latitude = data.features[0].center[1]; 
    const longitude = data.features[0].center[0];
    console.log(latitude, longitude);
  }
})