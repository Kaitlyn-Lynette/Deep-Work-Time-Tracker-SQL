//Dependencies

var express = require ("express");

//Sets up the express app
var app = express ();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models")

//Middleware to handle parsing 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Static directory
app.use(express.static("app/public"));

// //Routes
require("./app/routes/api-routes.js")(app);
// require("./app/routes/html-routes")(app);

//Starts the server to begin listening and syncing sequelize models
db.sequelize.sync().then(function(){
    app.listen(PORT,function() {
    console.log("App listening on PORT" + PORT)
    });
});
