//STORED FRONTEND

var progressBarAmount = 0
var progressBarInterval = 0;
var questionNumberGlobal = 1;
var question = null;
var wrongAnswers = {course1: 0, course2: 0, }
var amountOfUserAnswerButtons = 10;
var userAnswersSelected = []
var currentButton = 0;
var difficulty = null;
var userAnswer = "";
var currentCourseHardMode = {};
var correctAnswerArrayInLetters = [];
var userAnswerArrayInLetters = [];
var comparisonArray = [];

//temporary to make github work

var currentURL = window.location.href;
console.log (currentURL);

//STORED BACKEND

var leastWrongAnswers = {course1: 100, course2: 100, };
var question1 = {question:"Select the Correct Meaning", questionSubject:"Hola", correctAnswer:"Hello", possibleAnswers: ["Yes", "No", "Maybe", "Hello"]};
var question2 = {question:"Fill in the blank", questionSubject:"Ella tiene una ____ grande", correctAnswer:"Bicicleta", possibleAnswers: ["Dinero", "Leche", "Manzana", "Bicicleta"]};
var question3 = {question:"Select the Correct Meaning", questionSubject:"Pretty", correctAnswer:"Bonito", possibleAnswers: ["Leche", "Manzana", "Dinero", "Bonito"]};
var question4 = {question:"Select the Correct Meaning", questionSubject:"Bread", correctAnswer:"Pan", possibleAnswers: ["Mujer", "Agua", "Dinero", "Pan"]};
var question5 = {question:"Write this in English", questionSubject:"Ella es una niña", correctAnswer:"She is a girl", possibleAnswers: ["It", "girl", "bread", "a", "is", "She", "apples", "milk"]};
var course1 = [question1, question2, question3, question4, question5];
var courses = [course1]; 

window.addEventListener('load', hasLoadedPage()) 

function hasLoadedPage() {
    $(".progress-bar").attr("aria-valuenow", "0");
    $(".progress-bar").css("width", "0%");

    //Setting the Difficult variable from the localStorage variable "difficulty"

    difficulty = localStorage.getItem('difficulty');

    if (difficulty == "Normal") {
        //Getting the amount the Progress bar should move each time depending on the amount of items in the current course selected.
        let ItemsInCurrentCourse = courses[localStorage.getItem('courseNumber') -1].length;
        progressBarInterval = 100 / ItemsInCurrentCourse;
    }
    else {
        //Removing the fill in the blank questions for hard mode as they dont make sense when there is no selecting an answer
        currentCourseHardMode = courses[localStorage.getItem('courseNumber') -1]
        for (i = 0; i < courses[localStorage.getItem('courseNumber') -1].length; i++) {
            if (currentCourseHardMode[i].question == "Fill in the blank") {
                currentCourseHardMode.splice(i, 1);
            }
        }
        //Getting the amount the Progress bar should move each time depending on the amount of items in the current course selected.
        let ItemsInCurrentCourse = currentCourseHardMode.length;
        progressBarInterval = 100 / ItemsInCurrentCourse;
    }

    questionType();
}

/**********************************************************************************************************************************************************
This is all for Normal Mode
***********************************************************************************************************************************************************/

function normalMode() {

    $('.userAnswerButton').show()
    $('.userAnswerInputForm').hide()
    
    //Removing the previous answer

    for (let i = 10; i > 0; i--) {
        $("#userAnswerCurrent" + i).hide();
        $("#userAnswerCurrent" + i).html("");
    };

    //Resetting array of the previous answer

    userAnswersSelected = [];

    //Changing button colours back to their normal active colours

    $(".userAnswerButton").css("background-color", "#0d6efd");
    $(".userAnswerButton").css("border-color", "#0d6efd");


    if (currentQuestion.question == "Select the Correct Meaning") {
        selectTheCorrectMeaning();
    }
    else if (currentQuestion.question == "Fill in the blank"){
        fillInTheBlank();
    }
    else if (currentQuestion.question == "Write this in English"){
        writeThisInEnglish();
    }
}

/**********************************************************************************************************************************************************
SELECT CORRECT MEANING QUESTIONS SELECT CORRECT MEANING QUESTIONS SELECT CORRECT MEANING QUESTIONS SELECT CORRECT MEANING QUESTIONS 
***********************************************************************************************************************************************************/

function selectTheCorrectMeaning() {
    $('.questionAnswerCheck').text("");
    $('#submitButton').show();
    $('#nextButton').hide();
    $('#popupbox').hide();
    console.log("selectTheCorrectMeaning Loaded");
    

    //Generating Question Page

    $(".question").text(currentQuestion.question);
    $(".questionSubject").text(currentQuestion.questionSubject);


    //Shuffling the Array

    for (let i = currentQuestion.possibleAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [currentQuestion.possibleAnswers[i], currentQuestion.possibleAnswers[j]] = [currentQuestion.possibleAnswers[j], currentQuestion.possibleAnswers[i]]; 
    }

    for (let i = 10; i > 0; i--) {
        $("#userAnswer" + i).show();
    };

    // Renaming the buttons to be the different words

    for (let i = amountOfUserAnswerButtons; i > 0; i--) {
        $("#userAnswer" + i).html(currentQuestion.possibleAnswers[i-1]);
    }
    
    // Hiding other buttons which are not used

    for (i = amountOfUserAnswerButtons; i > currentQuestion.possibleAnswers.length; i--) {
        $("#userAnswer" + i).hide()
    } 

    
}
/**********************************************************************************************************************************************************
FILL IN THE BLANK QUESTIONS FILL IN THE BLANK QUESTIONS FILL IN THE BLANK QUESTIONS FILL IN THE BLANK QUESTIONS FILL IN THE BLANK QUESTIONS 
***********************************************************************************************************************************************************/

function fillInTheBlank() {
    $('.questionAnswerCheck').text("");
    $('#submitButton').show();
    $('#nextButton').hide();
    $('#popupbox').hide();
    console.log("fillInTheBlank Loaded");
    

    //Generating Question Page

    $(".question").text(currentQuestion.question);
    $(".questionSubject").text(currentQuestion.questionSubject);


    //Shuffling the Array

    for (let i = currentQuestion.possibleAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [currentQuestion.possibleAnswers[i], currentQuestion.possibleAnswers[j]] = [currentQuestion.possibleAnswers[j], currentQuestion.possibleAnswers[i]]; 
    }


    for (let i = 10; i > 0; i--) {
        $("#userAnswer" + i).show();
    };

    // Renaming the buttons to be the different words

    for (let i = amountOfUserAnswerButtons; i > 0; i--) {
        $("#userAnswer" + i).html(currentQuestion.possibleAnswers[i-1]);
    }
    
    // Hiding other buttons which are not used

    for (i = amountOfUserAnswerButtons; i > currentQuestion.possibleAnswers.length; i--) {
        $("#userAnswer" + i).hide()
    } 
    
}

function writeThisInEnglish() {
    $('.questionAnswerCheck').text("");
    $('#submitButton').show();
    $('#nextButton').hide();
    $('#popupbox').hide();
    console.log("writeThisInEnglish Loaded");
    

    //Generating Question Page

    $(".question").text(currentQuestion.question);
    $(".questionSubject").text(currentQuestion.questionSubject);


    //Shuffling the Array

    for (let i = currentQuestion.possibleAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [currentQuestion.possibleAnswers[i], currentQuestion.possibleAnswers[j]] = [currentQuestion.possibleAnswers[j], currentQuestion.possibleAnswers[i]]; 
    }

    for (let i = 10; i > 0; i--) {
        $("#userAnswer" + i).show();
    };

    // Renaming the buttons to be the different words

    for (let i = amountOfUserAnswerButtons; i > 0; i--) {
        $("#userAnswer" + i).html(currentQuestion.possibleAnswers[i-1]);
    }
    
    // Hiding other buttons which are not used

    for (i = amountOfUserAnswerButtons - currentQuestion.possibleAnswers.length; i > 0; i--) {
        $("#userAnswer" + amountOfUserAnswerButtons--).hide()
    } 

}

function submitAnswerNormal() {

    //Making the correct answer have no spaces for comparing with

    let correctAnswerNormalMode = currentQuestion.correctAnswer.replace(/ /g, "");
    console.log (correctAnswerNormalMode);
    
    //Combining all the buttons pressed into one answer

    let userAnswerSubmitted = "";

    let userAnswerAtCurrentIndex = "";
    let userAnswersSelectedLength = userAnswersSelected.length;
    for (let i = 0; i < userAnswersSelectedLength; i++) {
        selectedAnswerIndex = userAnswersSelected.shift() + 1;
        console.log(selectedAnswerIndex);
        userAnswerAtCurrentIndex = $("#userAnswer" + selectedAnswerIndex).html();
        userAnswerSubmitted = userAnswerSubmitted + userAnswerAtCurrentIndex;
        console.log(userAnswerSubmitted);
    }

    
    // Seeing is the answer is right

    if (userAnswerSubmitted == correctAnswerNormalMode) { 
        progressBarAmount = progressBarAmount + progressBarInterval;
        $(".questionAnswerCheck").text("Correct");
        $("#submitButton").hide();
        $("#nextButton").show();
        $(".progress-bar").attr("aria-valuenow", progressBarAmount);
        $(".progress-bar").css("width", progressBarAmount + "%");
        if (progressBarAmount >= 100) {
            let currentCourse = "course" + localStorage.getItem('courseNumber'); 
            for (let i = 10; i > 0; i--) {
                $("#userAnswer" + i).hide();
            };
            $('#popupbox').show();
            $('#nextButton').hide();
            $('#courseCompletePopupText').html("You Completed Course " + localStorage.getItem('courseNumber') + ". You Submitted " 
            + wrongAnswers[currentCourse] + " Incorrect Answers.");
        }
    }
    else {
        $(".questionAnswerCheck").text("Wrong");
        wrongAnswers.course1 ++; 

        //Removing the previous answer

        for (let i = 10; i > 0; i--) {
            $("#userAnswerCurrent" + i).hide();
            $("#userAnswerCurrent" + i).html("");
        };

        //Changing button colours back to their normal active colours

        $(".userAnswerButton").css("background-color", "#0d6efd");
        $(".userAnswerButton").css("border-color", "#0d6efd");
    }
}

// The answer buttons

function userAnswerClicked(userAnswerClicked) {
    let indexOfCurrentItem = userAnswersSelected.indexOf(userAnswerClicked-1);
    if (userAnswersSelected[indexOfCurrentItem] != (userAnswerClicked-1)) {
        
        if (currentButton != 10) {
            currentButton ++;
            console.log(currentButton);
            userAnswersSelected.push((userAnswerClicked-1));
        }
        else {
            console.log ("NEW ELSE NEW ELSE NEW ELSE")
            userAnswersSelected = [];
            for (let i = 1; i <= 10; i++) {
                if  ($("#userAnswerCurrent" + i).html() == "") {
                    console.log ("its nothing");
                    console.log(currentButton);
                    console.log("this is i:" + i);
                    
                }
                else {
                    console.log ("its something");
                    console.log($("#userAnswerCurrent" + i).html());
                    indexOfCurrentButton = currentQuestion.possibleAnswers.indexOf($("#userAnswerCurrent" + i).html());
                    userAnswersSelected.push(indexOfCurrentButton);
                    $("#userAnswerCurrent" + i).hide();
                    $("#userAnswerCurrent" + i).html("");
                    console.log("this is i:" + i);
                }
            }

            currentButton = 1;
            userAnswersSelected.push((userAnswerClicked-1));

            for (let i = 0; i < userAnswersSelected.length; i++) {
                $("#userAnswerCurrent" + currentButton).html(currentQuestion.possibleAnswers[userAnswersSelected[i - 1]]);
                if ($("#userAnswerCurrent" + currentButton).html() != "") {
                    $("#userAnswerCurrent" + currentButton).show();
                    currentButton ++;
                }
            }

        }

        
        $("#userAnswerCurrent" + currentButton).show();
        $("#userAnswerCurrent" + currentButton).html(currentQuestion.possibleAnswers[userAnswerClicked-1]);

    }
    else {
        console.log("NOT DOING ANYTHING");
    }
    //Changing button colours of button pressed to show they are deactivated

    $("#userAnswer" + userAnswerClicked).css("background-color", "#A8B3B5")
    $("#userAnswer" + userAnswerClicked).css("border-color", "#A8B3B5")
}

function userAnswerCurrentClicked(userAnswerCurrentClicked) {
    let indexOfButtonPressedInPossibleAnswers = currentQuestion.possibleAnswers.indexOf($("#userAnswerCurrent" + userAnswerCurrentClicked).html());
    indexOfCurrentItem = userAnswersSelected.indexOf(indexOfButtonPressedInPossibleAnswers)
    userAnswersSelected.splice(indexOfCurrentItem, 1);

    $("#userAnswerCurrent" + userAnswerCurrentClicked).hide();
    $("#userAnswerCurrent" + userAnswerCurrentClicked).html("");

    //Changing button colours of button pressed to show they are active again

    $("#userAnswer" + (indexOfButtonPressedInPossibleAnswers + 1)).css("background-color", "#0d6efd");
    $("#userAnswer" + (indexOfButtonPressedInPossibleAnswers + 1)).css("border-color", "#0d6efd");
}


/**********************************************************************************************************************************************************
This is all for Hard Mode
***********************************************************************************************************************************************************/

function hardMode() {
    $('.questionAnswerCheck').text("");
    $('#submitButton').show();
    $('#nextButton').hide();
    $('#userAnswer').val("")
    $('#popupbox').hide();
    console.log("hardMode Loaded");

    $('.userAnswerButton').hide()
    $('.userAnswerInputForm').show()

    $(".question").text(currentQuestion.question);
    $(".questionSubject").text(currentQuestion.questionSubject);
}

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if ($('#userAnswer').val() != "") {
            if ($('#nextButton').is(":visible") == true) {
                $('#nextButton').click();
            }
            else if ($('#submitButton').is(":visible")) {
                $('#submitButton').click();
            }
        }
    }
})

function submitAnswerHard() {
    userAnswer = $('#userAnswer').val().toLowerCase();
    console.log(userAnswer);

    let correctAnswerHardMode = currentQuestion.correctAnswer.toLowerCase();

    for (i = 0; i < correctAnswerHardMode.length; i++) {
        correctAnswerArrayInLetters.push(correctAnswerHardMode.charAt(i)); 
    }

    console.log (correctAnswerArrayInLetters);

    for (i = 0; i < userAnswer.length; i++) {
        userAnswerArrayInLetters.push(userAnswer.charAt(i)); 
    }

    console.log (userAnswerArrayInLetters);

    if (userAnswer != correctAnswerHardMode) {
        console.log("It wrong");

        let currentLetterCorrectIndex = null;
        let userAnswerReplaced = userAnswer;
        for (i = 0; i < correctAnswerHardMode.length; i++) {
            currentLetterCorrectIndex = userAnswerReplaced.indexOf(correctAnswerArrayInLetters[i])
            comparisonArray.push(currentLetterCorrectIndex);
            userAnswerReplaced = userAnswerReplaced.replace(correctAnswerArrayInLetters[i], "1");
            console.log(userAnswerReplaced)
        }

        console.log(comparisonArray);
        
    }



    if (userAnswer == correctAnswerHardMode) {
        console.log("correct")
        $(".questionAnswerCheck").text("Correct");
        correctAnswerHard();
    }
    else {
        $(".questionAnswerCheck").text("Wrong");
        wrongAnswers.course1 ++; 
    }
    
    userAnswerArrayInLetters = [];
    correctAnswerArrayInLetters = [];
    allComparisonArrays = [];
    comparisonArray = [];
}



function correctAnswerHard() {
    progressBarAmount = progressBarAmount + progressBarInterval;
    $(".questionAnswerCheck").text("Correct");
    $("#submitButton").hide();
    $("#nextButton").show();
    $(".progress-bar").attr("aria-valuenow", progressBarAmount);
    $(".progress-bar").css("width", progressBarAmount + "%");

    if (progressBarAmount >= 100) {
        let currentCourse = "course" + localStorage.getItem('courseNumber'); 
        $('#popupbox').show();
        $('.userAnswerInputForm').hide()
        $('#nextButton').hide();
        $('#courseCompletePopupText').html("You Completed Course " + localStorage.getItem('courseNumber') + ". You Submitted " 
        + wrongAnswers[currentCourse] + " Incorrect Answers.");
    }
}

/**********************************************************************************************************************************************************
This is for Both
***********************************************************************************************************************************************************/

function questionType() {

    //Determining the difficulty

    if (difficulty == "Normal") {
        
        //Determining what the question type is

        courseNumber = localStorage.getItem('courseNumber') -1;
        questionNumber = questionNumberGlobal - 1;
        let currentCourse = courses[courseNumber];
        currentQuestion = currentCourse[questionNumber];
        questionNumberGlobal++;

        normalMode(); 
    }
    else {

        //Determining what the question type is

        courseNumber = localStorage.getItem('courseNumber') -1;
        questionNumber = questionNumberGlobal - 1;
        let currentCourse = currentCourseHardMode;
        currentQuestion = currentCourse[questionNumber];
        questionNumberGlobal++;

        hardMode();
    }

    
}

// The submit button

function submitAnswer() {

    if (difficulty == "Hard") {
        submitAnswerHard();
    }
    else {
        submitAnswerNormal();
    }

    
}





// The next course button

function nextCourse(courseNumber, difficulty) {
    localStorage.setItem("difficulty" , difficulty)
    localStorage.setItem("courseNumber" ,courseNumber)
    if (currentURL == "http://127.0.0.1:5500/Language-Learn/index.html") {
        location.href = '/Language-Learn/html/courses.html'
    }
    else {
        location.href = '/Language-Learn/Language-Learn/html/courses.html';
    }
    
}

function tryAgainFunction() {
    if (currentURL == "http://127.0.0.1:5500/Language-Learn/html/courses.html") {
        location.href = '/Language-Learn/html/courses.html'
    }
    else {
        location.href = '/Language-Learn/Language-Learn/html/courses.html';
    }
};

function backToMenuFunction() {
    if (currentURL == "http://127.0.0.1:5500/Language-Learn/html/courses.html") {
        location.href = '/Language-Learn/index.html'
    }
    else {
        location.href = '/Language-Learn/Language-Learn/index.html';
    }
};

