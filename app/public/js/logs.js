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
        newPostIt.addClass("tile is-4 is-child notification is-warning")

        var newBody = $("<p>");
        newBody.text(post.description);
        newPostIt.append(newBody)

        return newPostIt;
    }
        
    });

  
