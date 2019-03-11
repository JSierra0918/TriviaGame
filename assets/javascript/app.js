//Question objects

var question1 = {
    question: "Where did Forrest Gump get shot?",
    answer: ["Buttocks", "Leg", "Hans", "Back"],
    correct: "Buttocks",
    img: "./assets/images/buttocks.gif"
};

var question2 = {
    question: "What did Conan the Barbarian do to get all his muscles?",
    answer: ["Swing his sword", "Lift massive bolders", "Wheel of pain", "Run"],
    correct: "Wheel of pain",
    img: "./assets/images/wheelofpain.gif"
};

var question3 = {
    question: "Benjamin Budford tells Forrest how many ways can shirmp be prepared?",
    answer: ["45", "35", "21", "18"],
    correct: "21",
    img: "./assets/images/shrimp.gif"
};

var question4 = {
    question: "what's an action hero's greatest strength?",
    answer: ["Grip strength", "One liners", "Always able to survie", "Charming looks"],
    correct: "Grip strength",
    img: "./assets/images/hero.gif"
};

var question5 = {
    question: "Lloyd Christmas and Harry Dunne thought Aspen whas in what state?",
    answer: ["Colorado", "California", "Washington", "Minnesota"],
    correct:  "California",
    img: "./assets/images/dumb.gif"
};

var question6 = {
    question: "How many shots did John Wick fire in his house?",
    answer: ["20", "19", "30", "5"],
    correct:  "20",
    img: "./assets/images/john.gif"
};

var question7 = {
    question: "How old was Scarlet Johansson in Lost in Translation?",
    answer: ["18", "21", "16", "27"],
    correct:  "18",
    img: "./assets/images/scar.gif"
};

//initialize variables

var questionsArray = [question1, question2, question3];
var questionArrayLength = questionsArray.length;
var questionArrayRandom;
var totalQuestions;
var questionsRight = 0;
var questionsWrong = 0;
var timeCount = 30;
var timerID;


//reset and play game from beginning
function reset() {
    var totalQuestions = 0;
    questionsArray = [question1, question2, question3,question4, question5, question6,question7];
    $(".img-container").empty();
    generateQuestion();
    onClick();
    timerID = setInterval(timerCountDown, 1000);
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
    
    $(".img-container").append(transitionImage);
    //show correct answer or wrong answer then go into generate next question.

    //remove ansers
    $(".answer").remove();
    $(".question-title").remove();

    //check if user finished questions
    winningCondition();

    setTimeout(nextQuestion, 2000);
    //change all references of nextQuestion to transtion

}

function congrats() {
    var congrats = $("<h1>");
    congrats
        .addClass("correct")
        .text("Correct! The Answer was " + questionArrayRandom.correct);

    $(".img-container").append(congrats);
}

function dang() {
    var dang = $("<h1>");
    dang
        .addClass("incorrect")
        .text("Dang! The Answer was " + questionArrayRandom.correct);

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

function winningCondition() {
    totalQuestions = questionsArray.length;

    console.log("total questions: " + totalQuestions + "questionArray: " + questionsArray.length);
    if (totalQuestions === 0){
        var winDiv = $("<div>");
        winDiv.addClass("win-div");
        winDiv.text("The game is finished!  You got this many right: " +questionsRight + " and this many wrong: " + questionsWrong);

        $(".img-container").append(winDiv);

        var resetButton = $("<div>");
        resetButton.addClass("reset-button");
        resetButton.text("Play again");

        $(".img-container").append(resetButton);
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

$(document).on("click",".reset-button",reset);


//Generate Question
generateQuestion();
onClick();
timerID = setInterval(timerCountDown, 1000);


