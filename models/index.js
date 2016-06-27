var db = require("../db");
var Sequelize = require("sequelize");


var Activity = require("./activity");
var Hotel = require("./hotel");
var Place = require("./place");
var Restaurant = require("./restaurant");

console.log("Activity is", Activity);
Activity.belongsTo(Place);
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = db;
