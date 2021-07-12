$(document).ready(function() {
    var postBoard = $(".post-container")
    var posts;


    function getLogs(data) {
        $.get("/api/all", function (data) {
            posts = data;
            if(!posts || !posts.length) {
                tileWrap.append("You have zero posts")
            }
            else {
                initializePostIts();
            }
        });
    }

    getLogs();

    function initializePostIts () {
        postBoard.empty();
        var postsToAdd = [];
        for(var i=0; i<posts.length; i++) {
            console.log(posts[i])
            postsToAdd.push(createNewPostIt(posts[i]));             
        }
        postBoard.append(postsToAdd) 
       
    }

    function createNewPostIt (post) {

        var newPostIt=$("<tile>");
        newPostIt.addClass("tile notification is-warning post-it")

        console.log(moment(post.createdAt).format("MMM Do YY"))
        var date = moment(post.createdAt).format("MMM Do YY")
        var newBody = $("<p>");
        newBody.html(date +  "<br>" + post.description);
        newPostIt.append(newBody)

        return newPostIt;
    }
        
    });

  
