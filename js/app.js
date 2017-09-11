/* App Definition */

// Magic 8 returns random answer when users enters text and clicks on button //

/* Variables */
var newColor = document.querySelector(".ball"); //variable that targets spehere 
var askButton = document.querySelector(".ask-question"); //variable that targets button 
var answers = ["It is certain",
              "Only time will tell",
              "cannot confirm or deny",
              "No way!",
              "Try again",
              "Absolutely"]; //array that stores answers to questions


newColor.style.webkitAnimationPlayState = "paused"; //pauses css animation on load 

/* Functions */

function changeColor() { // Changes background of sphere
    newColor.style.background = "purple"
}

function returnAnswers() { // returns a random index from the answers array, prints return value to square and output divs on page
    var randomAnswers = answers[Math.floor(Math.random() * answers.length)];
    console.log(randomAnswers);
//    var yourFortune = document.querySelector(".output");
//    yourFortune.innerHTML = randomAnswers;
    document.querySelector(".square").innerHTML = randomAnswers;

}


function shakeSomething() { // sets shake animation to running state 

    newColor.style.webkitAnimationPlayState = "running";

}

function makeNew() { // adds shake string to webpage 
    document.querySelector(".popUp").innerHTML = "Shake"
    document.querySelector(".popUp2").innerHTML = "Shake"

}

function checkText() {
    var inputText = document.querySelector(".text-area");
    if (inputText.value == "Enter Question") {
        window.alert("Please submit question in text box and press the 'Ask Magic 8' button")
       
    } else {
        askButton.addEventListener("click", shakeSomething, false);
        askButton.addEventListener("click", makeNew, false);
        askButton.addEventListener("click", changeColor, false);
        returnAnswers();

    }
}



console.log(answers.length); // logs the answers array length to the console 

/* Event Listeners */

//askButton.addEventListener("click", changeColor, false); // executes changeColor function when button is clicked
//askButton.addEventListener("click", returnAnswers, false); // executes returnAnswers function when button is clicked
//askButton.addEventListener("click", shakeSomething, false); // executes shakeSomething function when button is clicked.
//askButton.addEventListener("click", makeNew, false); //executes makeNew function when button is clicked
askButton.addEventListener("click", checkText, false);


/* Erroneous Code*/

//var newText = document.querySelector(".popUp")
//askButton.addEventListener("animation-start", makeNew, false); 
//var box = document.querySelector(".text-area"); // variable that targets text box 
//var workWork = document.querySelector(".square"); //variable that targets the square within the sphere 
//var currentValue = "Enter text"; // variable that sets curent value of text box 
//    var inputText = document.forms.value = "Enter Question"
//var getEm = document.querySelector(".output"); //variable that targets output div
