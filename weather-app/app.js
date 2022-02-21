const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=179e304ba8eae4b428944234999d878b&query=New York'

request({url: url}, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current)
});