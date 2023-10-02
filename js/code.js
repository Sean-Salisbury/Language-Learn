$(".progress-bar").attr("aria-valuenow", "0");
$(".progress-bar").css("width", "0%");



function onCourse1() {
    console.log("Course 1 Loaded")
    var wrongAnswersArray = ["Yes", "No", "Maybe"]
    var question = {question:"Select the Correct Meaning", questionSubject:"Hola", correctAnswer:"Hello", wrongAnswers:wrongAnswersArray}
    

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

function userAnswer1Clicked() {
    if (questionAnswerPosition == 1) {
        $(".questionAnswerCheck").text("Correct");
    }
    else {
        $(".questionAnswerCheck").text("Wrong");
    }
}

function userAnswer2Clicked() {
    if (questionAnswerPosition == 2) {
        $(".questionAnswerCheck").text("Correct");
    }
    else {
        $(".questionAnswerCheck").text("Wrong");
    }
}

function userAnswer3Clicked() {
    if (questionAnswerPosition == 3) {
        $(".questionAnswerCheck").text("Correct");
    }
    else {
        $(".questionAnswerCheck").text("Wrong");
    }
}

function userAnswer4Clicked() {
    if (questionAnswerPosition == 4) {
        $(".questionAnswerCheck").text("Correct");
    }
    else {
        $(".questionAnswerCheck").text("Wrong");
    }
}