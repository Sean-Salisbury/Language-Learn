$(".progress-bar").attr("aria-valuenow", "0");
$(".progress-bar").css("width", "0%");



function onCourse1() {
    $('#nextButton').hide();
    console.log("Course 1 Loaded");
    var wrongAnswersArray = ["Yes", "No", "Maybe"];
    var question = {question:"Select the Correct Meaning", questionSubject:"Hola", correctAnswer:"Hello", wrongAnswers:wrongAnswersArray};

    //Generating Question Page

    $(".question").text(question.question);
    $(".questionSubject").text(question.questionSubject);

    let possibleAnswerPositions = [1, 2, 3, 4]

    //Shuffling the Array

    for (let i = possibleAnswerPositions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [possibleAnswerPositions[i], possibleAnswerPositions[j]] = [possibleAnswerPositions[j], possibleAnswerPositions[i]]; 
    }

    //Using the pop method to take out the last number in the array which will be the index of the answer button

    questionAnswerPosition = possibleAnswerPositions.pop();

    //Logging the array and the answer position for debugging


    console.log(questionAnswerPosition)
    console.log(possibleAnswerPositions)
    console.log()

    

    $("#userAnswer" + questionAnswerPosition).html(question.correctAnswer);
    $("#userAnswer" + possibleAnswerPositions[0]).html(question.wrongAnswers[0]);
    $("#userAnswer" + possibleAnswerPositions[1]).html(question.wrongAnswers[1]);
    $("#userAnswer" + possibleAnswerPositions[2]).html(question.wrongAnswers[2]);
    
}

// The submit button

function submitAnswer() {
    if (userAnswer == questionAnswerPosition) {
        $(".questionAnswerCheck").text("Correct");
        $("#submitButton").hide();
        $("#nextButton").show();
    }
    else {
        $(".questionAnswerCheck").text("Wrong");
    }
}

// The answer buttons

function userAnswer1Clicked() {
    userAnswer = 1;
    $(".userAnswerButton").css("background-color", "#0d6efd");
    $("#userAnswer1").css("background-color", "#2349A0");
}

function userAnswer2Clicked() {
    userAnswer = 2;
    $(".userAnswerButton").css("background-color", "#0d6efd");
    $("#userAnswer2").css("background-color", "#2349A0");
}

function userAnswer3Clicked() {
    userAnswer = 3;
    $(".userAnswerButton").css("background-color", "#0d6efd");
    $("#userAnswer3").css("background-color", "#2349A0");
}

function userAnswer4Clicked() {
    userAnswer = 4;
    $(".userAnswerButton").css("background-color", "#0d6efd");
    $("#userAnswer4").css("background-color", "#2349A0");
}
