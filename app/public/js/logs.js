$(document).ready(function() {

    function getLogs(data) {
        $.get("/api/all", function (data) {
            posts = data;
            if(data.length !==0) {
                initializePostIts()
            };
        });
                

    }
getLogs();

    function initializePostIts () {
        var postsToAdd = [];
        for(var i=0; i<posts.length; i++) {
            postsToAdd.push(createNewPostIt(posts[i]));
        }
        postBoard.append(postsToAdd);
    }

    function createNewPostIt (post) {
        var newPostIt = $("<div>")
        newPostIt.addClass("postit");

        var newPostItBody=$("<div>");
        newPostItBody.addClass("postit-body");

        var newPostText = $("<p>");
        newPostText.text(post.body);
        newPostItBody.append(newPostText)
    }


    });
