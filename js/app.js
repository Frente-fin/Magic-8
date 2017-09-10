// Enter text 
// Push "ask"
// Magic 8 returns random answer 

// Define variables with querySelector 
var newColor = document.querySelector(".ball");
var thatThing = document.querySelector(".ask-question");
var box = document.querySelector(".text-area");
var currentValue = "Enter text";
var getEm = document.querySelector(".output");
var workWork = document.querySelector(".square");
var answers = ["It is certain", 
              "Only time will tell",
              "cannot confirm or deny",
              "No way!",
              "Try again",
              "Absolutely"];


var newText = document.querySelector(".popUp")


function test() {
   
    newColor.style.background = "blue"
}

function questions() { 
       var randomAnswers = answers[Math.floor(Math.random() * answers.length)];
        console.log(randomAnswers);
        getEm.innerHTML = randomAnswers;
}


function shakeSomething() {
    newColor.style.webkitAnimationName = "shake";
    
}

function makeNew() {
    document.querySelector(".popUp").innerHTML = "Shake"
    document.querySelector(".popUp2").innerHTML = "Shake"

}


console.log(answers.length);

thatThing.addEventListener("click", test, false);
thatThing.addEventListener("click", questions, false);
thatThing.addEventListener("click", shakeSomething, false);
thatThing.addEventListener("click", makeNew, false);
