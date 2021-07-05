// const moment = require("moment");

$("#entry-submit").on("click", function(event){
    console.log("I was clicked!")
    event.preventDefault();

//Make a newEntry object 
    var newEntry = {
        description: $("#entry-description").val(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    console.log(newEntry);

// Send an AJAX POST-request with jQuery
    $.post("api/new", newEntry)
    // On success, run the following code
        .then(function() {

            var row = $("<div>");
            row.addClass=("entry");

            row.append("<div>" + newEntry.description + "</div>");
            row.append("<div>" + moment(created_at).format("h:mma on dddd")+"<div>")
            
            $("#entry-area").prepend(row);
        })
// Empty each input box by replacing the value with an empty string
    $("#entry-description").val("");
})

$.get("/api/all", function (data) {
    if(data.length !==0) {

    for(var i = 0; i<data.length; i++) {
        var timestamp = moment(data[i].createdAt).format("YYYY-MM-DD HH:mm");
    console.log(moment(data[i].createdAt).format("YYYY-MM-DD HH:mm:ss"))
    console.log(data[i].description)       
  
        var row = $("<div>");
        row.addClass("entry subtitle");
        row.append("<p>" + timestamp + " " + data[i].description + "</p>");
//Appending the entries submitted here. I want to append entries submitted only with today's date. 
        $("#entry-area").prepend(row);
        }
    };
});

