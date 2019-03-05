//grab a question
var totalQuestions = 10;

var questionsArray = ["Where is the heart of a shrimp located?","How many noses do slugs"];
//display the question
//grab answers
//3 being wrong and 1 being correct
// if it's right, then alert right!
// if it's wrong, alert wrong

var questions = {
    q1 : "Where is the heart of a shrimp located?",
    q2 : "How many noses do slugs have?",
    q3 : "How long does it take a sloth to digest its food?"
};


var answers = {
    a1 : ["head", "body", "tail", "claw"],
    a2 : ["4","3","1","2"],
    a3 : ["Two weeks", "1 week", "36 hours", "1 month", "16 hours"]
};

for (var i=0; i < totalQuestions.length; i++){

}

function GenerateRandomQuestion (obj){
    //generate random question
    var randomObjectKey = Object.keys(obj);     
    return randomObjectKey = Math.floor(Math.random() * randomObjectKey.length); 
  
}


function generateQuestion (){
    //generate random question
        var questionElement = $("<div>");

        questionElement.addClass("answer");
        
        $("#questionID").append(
        );
}


