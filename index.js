var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CustomerService' });
});

router.get('/submit', function(req,res){
  const city = req.query.city
  const url_api = "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29baa7faa4d2a38a64b25b6228aea256"
  axios.get(url_api)
.then(function(response){
  res.render('index',{data:response.data})
})
.catch(function(error){
  res.send(error)
})
});



module.exports = router;
