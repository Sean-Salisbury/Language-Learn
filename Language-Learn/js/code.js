//STORED FRONTEND

var progressBarAmount = 0
var progressBarInterval = 0;
var questionNumberGlobal = 1;
var question = null;
var wrongAnswers = {course1: 0, course2: 0, }
var amountOfUserAnswerButtons = 10;
var userAnswersSelected = []
var currentButton = 0;

//temporary to make github work

var currentURL = window.location.href;
console.log (currentURL);

//STORED BACKEND

var leastWrongAnswers = {course1: 100, course2: 100, };
var question1 = {question:"Select the Correct Meaning", questionSubject:"Hola", correctAnswer:"Hello", possibleAnswers: ["Yes", "No", "Maybe", "Hello"]};
var question2 = {question:"Fill in the blank", questionSubject:"Ella tiene una ____ grande", correctAnswer:"Bicicleta", possibleAnswers: ["Dinero", "Leche", "Manzana", "Bicicleta"]};
var question3 = {question:"Select the Correct Meaning", questionSubject:"Pretty", correctAnswer:"Bonito", possibleAnswers: ["Leche", "Manzana", "Dinero", "Bonito"]};
var question4 = {question:"Select the Correct Meaning", questionSubject:"Bread", correctAnswer:"Pan", possibleAnswers: ["Mujer", "Agua", "Dinero", "Pan"]};
var question5 = {question:"Write this in English", questionSubject:"Ella es una niña", correctAnswer:"Sheisagirl", possibleAnswers: ["It", "girl", "bread", "a", "is", "She", "apples", "milk"]};
var course1 = [question1, question2, question3, question4, question5];
var courses = [course1]; 

window.addEventListener('load', hasLoadedPage()) 

function hasLoadedPage() {
    $(".progress-bar").attr("aria-valuenow", "0");
    $(".progress-bar").css("width", "0%");
    questionType(1)

    //Getting the amount the Progress bar should move each time depending on the amount of items in the current course selected.

    let ItemsInCurrentCourse = courses[localStorage.getItem('courseNumber') -1].length;
    progressBarInterval = 100 / ItemsInCurrentCourse;
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




function questionType() {

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

    //Determining what the question type is

    courseNumber = localStorage.getItem('courseNumber') -1;
    questionNumber = questionNumberGlobal - 1;
    let currentCourse = courses[courseNumber];
    currentQuestion = currentCourse[questionNumber];
    questionNumberGlobal++;
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

// The submit button

function submitAnswer() {

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

    if (userAnswerSubmitted == currentQuestion.correctAnswer) { 
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


        

        // starting on AnswerCurrentButton 1 if the array is zero
        /*if (userAnswersSelected.length == 0){
            currentButton = 1;
            console.log(currentButton);
        }*/
        
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

// The next course button

function nextCourse(courseNumber) {
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

