//Question objects

var question1 = {
    question: "Where is the heart of a shirimp located at?",
    answer: ["head", "body", "tail", "claw"],
    correct: "head"
};

var question2 = {
    question: "How many noses do slugs have?",
    answer: ["4", "3", "1", "2"],
    correct: "4"
};

var question3 = {
    question: "How long does it take a sloth to digest its food?",
    answer: ["2 weeks", "1 week", "1 month", "16 hours"],
    correct: "2 weeks"
};

//initialize variables

var questionsArray = [question1, question2, question3];
var questionArrayRandom;
var totalQuestions = 10;
var questionsRight = 0;
var questionsWrong = 0;

for (var i = 0; i < totalQuestions.length; i++) {

}

function reset (){
    var totalQuestions = 10;
    questionsArray = [question1, question2, question3];

}

function timer (){

}

function generateQuestion() {
    //generate random question
    var questionTitle = $("#questionTitle");

    //select a random question
    var questionArrayRandomNum = Math.floor(Math.random() * questionsArray.length);
    questionArrayRandom = questionsArray[questionArrayRandomNum];
    console.log(questionArrayRandom)

    // get the ANSWER array from the question
    var questionsLength = questionArrayRandom.answer.length;

    //populate DOM with Text
    questionTitle.text(questionArrayRandom.question);

    //generate random answers
    for (var i = 0; i < questionsLength; i++) {

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

}

function nextQuestion () {
    //removes current answer class
    $(".answer").remove();
    generateQuestion();
    onClick();
}

//Click event with winning condition
function onClick (){
    $(".answer").on("click", function () {

        if ($(this).html() === questionArrayRandom.correct) {
            console.log("win!");
            questionsRight++
            nextQuestion();
        }else{
            console.log("Wrong!");
            questionsWrong++;
            nextQuestion();
        }
    
        console.log("click");
    });
}


//Generate Question
generateQuestion();
onClick();



