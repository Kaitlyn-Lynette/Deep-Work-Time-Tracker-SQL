var db = require("../models");

//Routes 

module.exports = function(app) {

    app.get("/api/all/", function(req,res) {
        db.Entry.findAll({}).then(function(dbEntry){
            res.json(dbEntry)
        });
    });

    app.post("/api/new", function(req,res) {
        console.log("Entry data:")
        console.log(req.body);

        var entry=req.body 
        // var routeName = entry.name.replace(/\s+/g, "").toLowerCase();
        db.Entry.create({
            // routeName: routeName,
            hour: entry.hour,
            description: entry.description,
            created_at: entry.create
        }).then(function(results) {
            res.json(dbEntry)
        });
    });

};