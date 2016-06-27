var express = require('express');
var router = express.Router();

var Promise = require('bluebird');
var db = require('../models');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');


module.exports = function makesRouter() {
router.get('/', function (req, res, next){
  console.log("reached beginnign")
  var dbPlaces, dbHotels, dbActivities, dbRestaurants;
  Promises = [Hotel.findAll(), Restaurant.findAll(), Activity.findAll()]

  Promise.all(Promises)
  .spread (function(p1,p2,p3){
    console.log("spreading")
    dbHotels = p1, dbRestaurants = p2, dbActivities = p3;
res.render('index', {dbHotels:dbHotels, dbRestaurants:dbRestaurants, dbActivities:dbActivities})
  })

})

 return router;
};
