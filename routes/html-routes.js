var path = require ("path");

module.exports = function(app) {

app.get("/",function(req,res) {
    res.sendFile(path.join(_dirname, "../app/public/index.html"));
});

app.get("/logs",function(req,res) {
    res.sendFile(path.join(__dirname, "../app/public/logs.html"))
})

};
