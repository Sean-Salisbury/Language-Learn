//STORED FRONTEND

var progressBarAmount = 0;
var questionNumberGlobal = 1;
var wrongAnswers = {course1: 0, course2: 0, }

//STORED BACKEND

var leastWrongAnswers = {course1: 100, course2: 100, };
var question1 = {question:"Select the Correct Meaning", questionSubject:"Hola", correctAnswer:"Hello", wrongAnswers: ["Yes", "No", "Maybe"]};
var question2 = {question:"Fill in the blank", questionSubject:"Ella tiene una ____ grande", correctAnswer:"bicicleta", wrongAnswers: ["Dinero", "Leche", "Manzana"]};
var question3 = {question:"Select the Correct Meaning", questionSubject:"Pretty", correctAnswer:"Bonito", wrongAnswers: ["Leche", "Manzana", "Dinero"]};
var course1 = [question1, question2, question3];
var courses = [course1]; 

window.addEventListener('load', hasLoadedPage()) 

function hasLoadedPage() {
    $(".progress-bar").attr("aria-valuenow", "0");
    $(".progress-bar").css("width", "0%");
    questionType(1)

    //Getting the amount the Progress bar should move each time depending on the amount of items in the current course selected.

    let ItemsInCurrentCourse = courses[localStorage.getItem('courseNumber') -1].length;
    progressBarAmount = 100 / ItemsInCurrentCourse;
    console.log(progressBarAmount)
}

/**********************************************************************************************************************************************************
SELECT CORRECT MEANING QUESTIONS SELECT CORRECT MEANING QUESTIONS SELECT CORRECT MEANING QUESTIONS SELECT CORRECT MEANING QUESTIONS 
***********************************************************************************************************************************************************/

function selectTheCorrectMeaning(question) {
    $('.questionAnswerCheck').text("");
    $('#submitButton').show();
    $('#nextButton').hide();
    $('#popupbox').hide();
    console.log("selectTheCorrectMeaning Loaded");
    

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
/**********************************************************************************************************************************************************
FILL IN THE BLANK QUESTIONS FILL IN THE BLANK QUESTIONS FILL IN THE BLANK QUESTIONS FILL IN THE BLANK QUESTIONS FILL IN THE BLANK QUESTIONS 
***********************************************************************************************************************************************************/

function fillInTheBlank(question) {
    $('.questionAnswerCheck').text("");
    $('#submitButton').show();
    $('#nextButton').hide();
    $('#popupbox').hide();
    console.log("fillInTheBlank Loaded");
    

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

//Determining what the question type is

function questionType() {
    courseNumber = localStorage.getItem('courseNumber') -1;
    questionNumber = questionNumberGlobal - 1;
    let currentCourse = courses[courseNumber];
    let currentQuestion = currentCourse[questionNumber];
    questionNumberGlobal++;
    if (currentQuestion.question == "Select the Correct Meaning") {
        selectTheCorrectMeaning(currentQuestion);
    }
    else if (currentQuestion.question == "Fill in the blank"){
        fillInTheBlank(currentQuestion);
    }
}

// The submit button

function submitAnswer() {
    if (userAnswer == questionAnswerPosition) {
        $(".questionAnswerCheck").text("Correct");
        $("#submitButton").hide();
        $("#nextButton").show();
        $(".progress-bar").attr("aria-valuenow", progressBarAmount);
        $(".progress-bar").css("width", progressBarAmount + "%");
        if (progressBarAmount >= 100) {
            let currentCourse = "course" + localStorage.getItem('courseNumber'); 
            $("#userAnswer1").hide(); 
            $("#userAnswer2").hide();
            $("#userAnswer3").hide(); 
            $("#userAnswer4").hide();
            $('#popupbox').show();
            $('#courseCompletePopupText').html("You Completed Course " + localStorage.getItem('courseNumber') + ". You Pressed " 
            + wrongAnswers[currentCourse] + " Incorrect Answers.");
        }
        else {
            $('#popupbox').hide();
        }

        progressBarAmount = progressBarAmount + progressBarAmount;
    }
    else {
        $(".questionAnswerCheck").text("Wrong");
        wrongAnswers.course1 ++; 
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

// The next course button

function nextCourse(courseNumber) {
    localStorage.setItem("courseNumber" ,courseNumber)
    location.href='/Language-Learn/html/courses.html';
}