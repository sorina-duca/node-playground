const path = require("path");
const express = require("express");
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express();

// define paths for express config
const publicDirectory = path.join(__dirname, "../public");
const viewsDirectory = path.join(__dirname, "../templates/views");

//setup static directory to serve
app.use(express.static(publicDirectory));

//setup handlebars view and location
app.set('view engine', 'hbs')
app.set('views', viewsDirectory)

app.get('', ((req, res) => {
  res.render('index',
      {title: 'Weather App'})
}))

app.get("/help", (req, res) => {
  res.render('help', {help: 'troubleshooting'});
});

app.get("/about", (req, res) => {
  res.send();
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Please provide and address'
    })
  }

  geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
    if (error) {
      return res.send({ error })
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error })
      }

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address
      })
    })
  })
});

app.get('/products', (req,res) => {
  if (!req.query.search) {
    return res.send({
      error: 'Please type in search term'
    })
  }
  console.log(req.query)
  res.send({
    products: []
  })
});


app.listen(3000, () => {
  console.log("server is up on port 3000");
});
