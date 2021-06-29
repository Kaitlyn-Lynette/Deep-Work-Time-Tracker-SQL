var Entry = require("../../models/entry");

//Routes 

module.exports = function(app) {

    app.get("api/all/", function(req,res) {
        Entry.findAll({}).then(function(results){
            res.json(results)
        });
    });

    app.post("api/new", function(req,res) {
        console.log("Entry data:")
        console.log(req.body);

        Entry.create({
            hour: req.body.hour,
            description: req.body.description,
            created_at: req.body.create
        }).then(function(results) {
            res.end();
        });
    });

}