//Dependencies

var express = require ("express");

//Sets up the express app
var app = express ();
var PORT = process.env.PORT || 8080;

//Middleware to handle parsing 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Static directory
app.use(express.static("app/public"));

//Routes
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes")(app);

//Starts the server to begin listening 
app.listen(PORT,function() {
    console.log("App listening on PORT" + PORT)
});
