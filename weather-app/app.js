const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// request({ url: coords_url, json: true }, (error, response) => {
//   if (error) {
//     console.log(
//       "Could not connect to mapbox api. Please check internet connection"
//     );
//   } else if (response.body.features.length < 1) {
//     console.log("Location could not be found, please choose another location.");
//   } else {
//     const latitude = response.body.features[0].center[0];
//     const longitude = response.body.features[0].center[1];
//     console.log(latitude, longitude);
//   }
// });

geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
  if (!process.argv[2]) {
    return console.log("Please input a location");
  }
  if (error) {
    return console.log("Error:", error);
  }

  forecast(longitude, latitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(location);
    console.log(
      `it is currently ${forecastData.temperature} degrees outside, but it feels like ${forecastData.feelslike}`
    );
  });
});
