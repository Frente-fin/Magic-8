// Enter text 
// Push "ask"
// Magic 8 returns random answer 

// Define variables with querySelector 
var newColor = document.querySelector(".circle");
var thatThing = document.querySelector(".ask-question");
var answers = ["It is certain", 
              "Only time will tell",
              "cannot confirm or deny"];
var randomAnswers = answers[Math.floor(Math.random())*answers.length];



console.log(answers.length);

function test() {
    newColor.style.backgroundColor = "blue"; 
}

function questions() {
    console.log(randomAnswers);
}


thatThing.addEventListener("click", test, false);
thatThing.addEventListener("click", questions, false);