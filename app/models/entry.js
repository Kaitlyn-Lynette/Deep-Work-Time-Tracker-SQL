// Dependencies
// =============================================================

//References the standard library
var Sequelize = require("sequelize");
//Connection to the database
var sequelize = require("../config/connection.js");

//Create the "Entry" model that matches with the DB
var Entry = sequelize.define("entry", {
    hour: Sequelize.INTEGER ,
    description: Sequelize.STRING,
    created_at: Sequelize.DATE
});

// Syncs with DB
Entry.sync()

//Makes the Entry Model available for other files 
module.exports = Entry