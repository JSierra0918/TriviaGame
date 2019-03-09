//Question objects

var question1 = {
    question: "Where is the heart of a shirimp located at?",
    answer: ["head", "body", "tail", "claw"],
    correct: "head",
    img: "./assets/images/confusedx640.gif"
};

var question2 = {
    question: "How many noses do slugs have?",
    answer: ["4", "3", "1", "2"],
    correct: "4",
    img: "./assets/images/confusedx640.gif"
};

var question3 = {
    question: "How long does it take a sloth to digest its food?",
    answer: ["2 weeks", "1 week", "1 month", "16 hours"],
    correct: "2 weeks",
    img: "./assets/images/confusedx640.gif"
};

//initialize variables

var questionsArray = [question1, question2, question3];
var questionArrayLength = questionsArray.length;
var questionArrayRandom;
var totalQuestions = 10;
var questionsRight = 0;
var questionsWrong = 0;
var timeCount = 30;
var timerID;


for (var i = 0; i < totalQuestions.length; i++) {

}

function reset() {
    var totalQuestions = 10;
    questionsArray = [question1, question2, question3];

}


function generateQuestion() {
    //Create a title element
    var questionTitle = $("<h3>");
    questionTitle
        .addClass("question-title")
        .attr("id", "questionTitle");

    //select a random question
    var questionArrayRandomNum = Math.floor(Math.random() * questionsArray.length);
    questionArrayRandom = questionsArray[questionArrayRandomNum];
    console.log(questionArrayRandom)

    // get the ANSWER array from the question
    var answerLength = questionArrayRandom.answer.length;

    //populate DOM with Text
    questionTitle.text(questionArrayRandom.question);
    $(".question-container").append(questionTitle);

    //generate random answers
    for (var i = 0; i < answerLength; i++) {

        console.log(questionArrayRandom.answer);


        //reinitiliaze on every loop
        var answerElement = $("<div>");
        var randomIndex = Math.floor(Math.random() * questionArrayRandom.answer.length);

        //assign class and text to new div
        answerElement
            .addClass("answer")
            .text(questionArrayRandom.answer[randomIndex]);

        $(".question-container").append(answerElement);

        // remove answer after every loop
        questionArrayRandom.answer.splice(randomIndex, 1);
    }

    //remove question so it does not repeat
    questionsArray.splice(questionArrayRandomNum, 1);
    console.log(questionArrayRandomNum);
    //start timer

}

function transition() {
    //stop timer
    clearInterval(timerID);
    timeCount = 30;

    //show loading/inbetwen images
    var transitionImage = $("<img> ");
   transitionImage
        .addClass("transition-image")
        .attr("src", questionArrayRandom.img);
    console.log(questionArrayRandom.img);
    $(".img-container").append(transitionImage);
    //show correct answer or wrong answer then go into generate next question.

    //remove ansers
    $(".answer").remove();
    $(".question-title").remove();

    setTimeout(nextQuestion, 2000);
    //change all references of nextQuestion to transtion

}

function congrats() {
    var congrats = $("<h1>");
    congrats
        .addClass("correct")
        .text("You got it right! Nice!");

    $(".img-container").append(congrats);
}

function dang() {
    var dang = $("<h1>");
    dang
        .addClass("incorrect")
        .text("Sorry, wrong answer!");

    $(".img-container").append(dang);
}

function nextQuestion() {
    //removes current answer class
    console.log(timeCount)
    $(".transition-image").remove();
    $(".correct").remove();
    $(".incorrect").remove();
    generateQuestion();
    timerID = setInterval(timerCountDown, 1000);
    onClick();
}


function timerCountDown() {
    $("#timeID").text(timeCount);
    timeCount--;

    if (timeCount === 0) {
        console.log("timer is at 0");
        timeCount = 0;
        clearInterval(timerID);
        $("#timeID").text(timeCount);

        // call next question
        questionsWrong--;
        dang();
        transition();
    }
}

//Click event with winning condition
function onClick() {
    $(".answer").on("click", function () {

        if ($(this).html() === questionArrayRandom.correct) {
            console.log("win!");
            questionsRight++;
            congrats();
            transition();

        } else {
            console.log("Wrong!");
            questionsWrong++;
            dang();
            transition();
        }

        console.log("click");
    });
}


//Generate Question
generateQuestion();
onClick();
timerID = setInterval(timerCountDown, 1000);


