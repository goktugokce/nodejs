const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=179e304ba8eae4b428944234999d878b&query=' + longitude + ',' + latitude;
  request({url:url, json:true}, (error, response) => {
    if(error){
      callback('Unable to connect weather api', undefined);
    }
    else if(response.body.error){
      callback('Unable to find the location', undefined);
    }
    else{
      callback(undefined, {
        temperature:response.body.current.temperature,
        precip:response.body.current.precip,
        feelslike: response.body.current.feelslike
      })
    }
  })
}

module.exports = forecast;