$(document).ready(function() {
    var postBoard = $(".post-container")
    var posts;


    function getLogs(data) {
        $.get("/api/all", function (data) {
            posts = data;
            if(!posts || !posts.length) {
                postBoard.append("You have zero posts")
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
        var newPostIt = $("<div>")
        newPostIt.addClass("postit");

        var newPostItBody=$("<div>");
        newPostItBody.addClass("postit-body");

        var newBody = $("<p>");
        // console.log(post.body)
        newBody.text(post.description);
        console.log(post.description)
        // console.log(post.body)
        newPostItBody.append(newBody)
        // newPostItBody.append(newPostIt)
        return newPostItBody;
    }
        
    });

  
