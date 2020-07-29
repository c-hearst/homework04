var scorepoint = 0;
var timeRunOut;

    function startQuiz(){
        timer = 10;
if (timer > 0) {
        var firstQuestion = prompt("Who invented the World Wide Web?\n(a) Tim Berners-Lee\n(b) Marie Curie\n(c) Steve Wozniak");
            if (firstQuestion == "a") {
                scorepoint = scorepoint + 1;
                } else {
                    timer = timer - 5;
        }
    }
        if (timer <= 0) {
            timeRunOut = prompt("You have run out of time! Please enter your initials.");
            rankings.innerHTML = timeRunOut + " " + scorepoint;
        }
if (timer > 0) {        
        var secondQuestion = prompt("What is JavaScript?\n(a) A type of computer\n(b) A programming language\n(c) An expensive type of coffee");
            if (secondQuestion == "b") {
                scorepoint = scorepoint + 1;
                } else {
                    timer = timer -5;
        }
    }
        if (timer <= 0) {
            timeRunOut = prompt("You have run out of time! Please enter your initials.");
            rankings.innerHTML = timeRunOut + " " + scorepoint;

        }
if (timer > 0) {
        var thirdQuestion = prompt("What is a web browser?\n(a) A type of smart phone\n(b) A dating app for spiders\n(c) A software application used to search the World Wide Web");
            if (thirdQuestion == "c") {
                scorepoint = scorepoint + 1;
                } else {
                    timer = timer - 5;
        }
    }
        if (timer <= 0) {
            timeRunOut = prompt("You have run out of time! Please enter your initials.");
            rankings.innerHTML = timeRunOut + " " + scorepoint;
        }
if (timer > 0) {
        alert("You've finished the quiz!");
            if (scorepoint > 0) {
                    score.innerHTML = scorepoint;
                }
        var initials = prompt("Please enter your initials.");
            if (initials !== "") {
            rankings.innerHTML = initials + " " + scorepoint;
        }
    }
    }
    function quizTimer() {
        timer = timer - 1;
        if (timer < 10) {
            time.innerHTML = timer;
        }
        if (timer < 1) {
            window.clearInterval(update);
        }
    }
    update = setInterval("quizTimer()", 1000);