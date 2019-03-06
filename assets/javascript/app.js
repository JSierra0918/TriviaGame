//grab a question
var totalQuestions = 10;
//display the question
//grab answers
//3 being wrong and 1 being correct
// if it's right, then alert right!
// if it's wrong, alert wrong

// var questions = {
//     q1 : "Where is the heart of a shrimp located?",
//     q2 : "How many noses do slugs have?",
//     q3 : "How long does it take a sloth to digest its food?"
// };

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
    answer: ["Two weeks", "1 week", "1 month", "16 hours"],
    correct: "Two weeks"
};

for (var i = 0; i < totalQuestions.length; i++) {

}

function GenerateRandomQuestion(obj) {
    //generate random question
    var randomObjectKey = Object.keys(obj);
    return randomObjectKey = Math.floor(Math.random() * randomObjectKey.length);

}


function generateQuestion() {
    //generate random question
    var questionTitle = $("#questionTitle");


    //populate DOM with Text
    questionTitle.text(question1.question);

    //generate answers
    for (var i = 0; i < question1.answer.length; i++) {
        //reinitiliaze every loop

        console.log(question1.answer[i]);
        var answerElement = $("<div>");
        var randomIndex = Math.floor(Math.random() * question1.answer.length);

        answerElement.addClass("answer");

        // $(".answer").text(question1.answer[i]);  
        $(".answer").text(question1.answer[randomIndex]);

        $(".question-container").append(answerElement);

        // remove answer after every loop
      //  question1.answer.splice(randomIndex, 1);
    }

}

generateQuestion();


