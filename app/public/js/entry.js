$("#entry-submit").on("click", function(event){
    console.log("I was clicked!")
    event.preventDefault();

var newEntry = {
    description: $("#entry-description").val(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
};
console.log(newEntry);

})
