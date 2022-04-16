const { error } = require('console');
const request = require('request');

const url='http://api.weatherstack.com/current?access_key=9e02fb91af0a2d69e62fe7d87b1f1c02&query=42.3605,-71.0596';

request({url:url,json:true},(error,response)=>{
    // const data= JSON.parse(response.body);
    console.log(response.body.current);
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")

})



const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3Vib2RoMTc1IiwiYSI6ImNsMjJhNjJwMjFkeWIzYm16eXZoMHpiejEifQ.yx8640OAK_se2bCzVJi14A'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})