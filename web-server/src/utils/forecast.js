const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=4ac31abae1c641ae0dcc68309e674dc2&query=${lat},${long}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather service.", undefined);
    } else if (body.error) {
      callback("Location you provided could not be found!", undefined);
    } else {
      callback(undefined, {
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
      });
    }
  });
};

module.exports = forecast;
