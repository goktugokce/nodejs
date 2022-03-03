const request = require('request');

const geocode = (address,callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ29rdHVnb2tjZSIsImEiOiJja3p3dGdjZmQxeTJ5Mm5wa3B3b2NyMWF6In0.M-W7coZmht8HfXf8Tiw1gg';
  request({url:url, json:true}, (error, response) => {
    if(error){
      callback('Unable to connect', undefined)
    }
    else if(response.body.message === 0){
      callback('Unable to locate', undefined)
    }
    else{
      callback(undefined, {
        latitude : response.body.features[0].center[1],
        longitude : response.body.features[0].center[0],
        location : response.body.features[0].place_name
      })
    }
  })

}

module.exports = geocode;