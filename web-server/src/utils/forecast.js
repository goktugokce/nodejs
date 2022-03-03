const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=179e304ba8eae4b428944234999d878b&query=' + latitude + ',' + longitude;
  request({url:url, json:true}, (error, response) => {
    if(error){
      callback('Unable to connect weather api', undefined);
    }
    else if(response.body.error){
      callback('Unable to find the location', undefined);
    }
    else{
      callback(undefined, 'Weather is ' + response.body.current.weather_descriptions[0] + '. Outside temperature is ' + response.body.current.temperature + ' celcius and feels like ' + response.body.current.feelslike + ' celcius, raining probability is %' + response.body.current.precip)
    }
  })
}

module.exports = forecast;