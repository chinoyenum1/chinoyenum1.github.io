window.onload = function() {
    addQuestion();

    let moveup = document.querySelectorAll(".up");
    for (let i = 0; i < moveup.length; i++) {
        moveUp(moveup[i]);
    }

    let movedown = document.querySelectorAll(".down");
    for (let i = 0; i < movedown.length; i++) {
        moveDown(movedown[i]);
    }

    let postcomment = document.querySelectorAll(".post");
    //for (let i = 0; i < postcomment.length; i++) {
    addComment(postcomment);
    //  }
}

window.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        addQuestion();
    }
});



function moveUp(elem) {
    elem.addEventListener("click", function() {
        let move = this.parentElement.parentElement;
        if (move.previousElementSibling) {
            move.parentNode.insertBefore(move, move.previousElementSibling);
        }
    });
}

function moveDown(dwn) {
    dwn.addEventListener("click", function() {
        let move = this.parentElement.parentElement;
        if (move.nextElementSibling) {
            move.parentNode.insertBefore(move.nextElementSibling, move);
        }
    })
}

function addQuestion() {
    let submit = document.getElementById("submit");
    submit.onclick = function() {
        let value = document.getElementById("input-question").value;
        if (value !== "") {
            let maindiv = document.createElement("div");

            let questiondiv = document.createElement("div");
            questiondiv.className = "quest-head";
            let question = document.createElement("h4");
            question.innerHTML = value;
            questiondiv.appendChild(question);
            let btnup = document.createElement("button");
            btnup.innerHTML = "&blacktriangle;";
            btnup.className = "btn btn-vote up";
            btnup.addEventListener("click", moveUp(btnup));
            questiondiv.appendChild(btnup);
            let btndown = document.createElement("button");
            btndown.innerHTML = "&blacktriangledown;";
            btndown.className = "btn btn-vote up";
            btndown.addEventListener("click", moveDown(btndown));
            questiondiv.appendChild(btndown);
            maindiv.appendChild(questiondiv);

            let commentdiv = document.createElement("div");
            commentdiv.className = "comment";
            let input = document.createElement("input");
            input.type = "text";
            input.className = "text";
            commentdiv.appendChild(input);
            let btnpost = document.createElement("button");
            btnpost.innerHTML = "Post Comment";
            btnpost.className = "btn post";
            btnpost.addEventListener("click", addComment2(btnpost));
            commentdiv.appendChild(btnpost);
            maindiv.appendChild(commentdiv);

            let viewComment = document.createElement("div");
            viewComment.className = "view-comment";

            maindiv.appendChild(viewComment);

            document.getElementById("meet").appendChild(maindiv);
        }

    }


}

function addComment(node) {
    console.log(node);
    for (let i = 0; i < node.length; i++) {
        node[i].addEventListener("click", function() { //console.log("node is: " + postcomment[i]);
            let text = document.querySelectorAll(".text");
            console.log(text);
            for (let j = 0; j < text.length; j++) {
                if (j === i) {
                    let comment = text[j].value;
                    console.log(comment);
                    writeComment(comment, node[i]);
                }
            }
        });
    }
}

function addComment2(node) {
    node.onclick = () => {
        let sib = node.previousElementSibling;
        console.log(node.parentNode.nextElementSibling.childNodes[0]);
        writeComment(sib.value, node);
    }
}

function writeComment(words, element) {
    let par = document.createElement("p")
    par.innerHTML = words;
    let bo = element.parentNode.nextElementSibling;
    console.log(bo);
    bo.appendChild(par);

}