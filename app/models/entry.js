// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

//Create the "Entry" model 

var Entry = sequelize.definte("entry", {
    date: Sequelize.DATEONLY ,
    time: Sequelize.INTEGER
});

// Syncs with DB
Entry.sync()

//Makes the Entry Model available for other files 
module.exports = Entry