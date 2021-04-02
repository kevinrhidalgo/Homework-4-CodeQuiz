//  The globally declared variables.
var startBtn = document.querySelector("#start");
var questionScreen = document.querySelector("#questions");
var questionPool = 0;
var selections = document.querySelector("#answers");
var endScreen = document.querySelector("#endGame");
var finalTally = 0;
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");
var clockCounter = 60;
var theTimer = document.querySelector("#clock");
var highScore = localStorage.getItem("highscore");






// Quiz is started and the screen hides while the questions appear.
startBtn.onclick = startQuiz;

function gameTimer () {
    var timeInterval = setInterval(function() {
        clockCounter--;
        theTimer.textContent = clockCounter;
        
        if(clockCounter === 0) {
        clearInterval(timeInterval);
         gameOver();
        }

    }, 500); 
}

function showAlert() {
  alert ("Hello world!");
}



function startQuiz() {
  gameTimer();
  var startScreen = document.querySelector("#begin");
  startScreen.setAttribute("class", "hide");
  questionScreen.removeAttribute("class");
  getQuestion();
}

 
// This function that picks the question from the pool of questions to display.
function getQuestion() {
  var currentQuestion = questions[questionPool];
  var questionTitle = document.querySelector("#title");
  questionTitle.textContent = currentQuestion.title;


  // The loop for the arrays
  for (var i = 0; i < currentQuestion.choice.length; i++) {
    var userChoice = document.createElement("button");
    userChoice.setAttribute("class", "choice");
    userChoice.setAttribute("value", currentQuestion.choice[i]);
    userChoice.textContent = i + 1 + ". " + currentQuestion.choice[i];
    selections.appendChild(userChoice);
    
  
    userChoice.onclick = checkAnswer;
  }
    /// This is the value of the choice that is chosen. 
    function checkAnswer(event) {
    var userAnswer = event.target.value;
    console.log(userAnswer);
    if (userAnswer === questions[questionPool].answer) {
      correct.removeAttribute("class");
   
    } else {
        wrong.removeAttribute("class");
        clockCounter-=10;
    }

    // This will clear the previous choices and allow the next loop of choices to populate.
    selections.innerHTML="";
    

    // This will move on to the next question
    questionPool++;


    // This will end the game if the user has gone through all the questions
    if (questionPool === questions.length-1){
        gameOver();
    } else {
        getQuestion()
    }





  }
}

// When the game ends the questions should hide and the end screen appears.
function gameOver() {
    questionScreen.setAttribute("class", "hide");
    endScreen.removeAttribute("class");
    }

    highscoresLink.addEventListener("click", function() {

      highscoresDisplay.classList.toggle("hide");
      quizLaunch.classList.add("hide");
      endQuizScreen.classList.add("hide");
      highscoresLink.classList.toggle("hide");
      returnToQuiz.classList.toggle("hide");
  
  
      leaderboardInitials.append.textContent = scoreList.initials;
      leaderboardScore.append.textContent = scoreList.highscore;
  
  })
  

  var clearScores = document.getElementById("clearScores");
var tbody = document.querySelector("#tbody");
var scoresList = localStorage.getItem("highscores");
scoresList = JSON.parse(scoresList);

if(scoresList === null){
    scoresList = [];
}

for(var i=0; i<scoresList.length; i++){

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.textContent = scoresList[i][0]; //player name
    td2.textContent = scoresList[i][1]; //score

    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
};


clearScores.addEventListener("click", function(){
    localStorage.removeItem("highscores");
    tbody.setAttribute("style", "display: none");

});
