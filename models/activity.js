var db = require("../db");
var Sequelize = require("sequelize");


var Activity = db.define ("activity", {
    name: {
        type: Sequelize.STRING
    },
    age_range: {
        type: Sequelize.STRING
    }
});

module.exports = Activity;