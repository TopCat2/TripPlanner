var express = require('express');
var router = express.Router();

var Promise = require('bluebird');
var db = require('../models');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

//  HARDCODED DATA for initial testing
var myHotels = [['The Plaza'], [], []];        // First dimension is the trip day
var myRestaurants = [['Pizza the Hutt', 'Open Market', 'The Quilted Giraffe'], [], []];
var myActivities = [['Nap', 'Statue of Liberty', 'Bicycling'], [], []];
var myDays = 3;
var dayList = [];
for (var i = 1; i <= myDays; i++) {
    dayList.push(i);
}



module.exports = function makesRouter() {
router.get('/', function (req, res, next){
  var dbPlaces, dbHotels, dbActivities, dbRestaurants;
  Promises = [Hotel.findAll(), Restaurant.findAll(), Activity.findAll()]

  Promise.all(Promises)
  .spread(function(p1,p2,p3){
    dbHotels = p1;
    dbRestaurants = p2;
    dbActivities = p3;
res.render('index', {dbHotels:dbHotels, dbRestaurants:dbRestaurants, dbActivities:dbActivities,
    myDays:dayList, myHotels: myHotels[0], myRestaurants: myRestaurants[0], myActivities: myActivities[0]})
  })

})

 return router;
};
