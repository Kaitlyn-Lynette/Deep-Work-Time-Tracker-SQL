var db = require("../models");

//Routes 

module.exports = function(app) {

    app.get("/api/all/", function(req,res) {
        db.Entry.findAll({}).then(function(dbEntry){
            res.json(dbEntry)
        });
    });

    // app.post("/api/new", function(req,res) {
    //     console.log("Entry data:")
    //     console.log(req.body);

    //     var entry = req.body 
       
    //     db.Entry.create({
    //         description: entry.description,
    //         created_at: entry.created_at
    //     }).then(function(results) {
    //         res.json(dbEntry)
    //     });
    // });

};