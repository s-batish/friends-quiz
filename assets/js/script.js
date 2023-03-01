const homeArea = document.getElementById("quiz-container");
const rulesArea = document.getElementById("rules-area");
const openRulesBtn = document.getElementById("rules-btn");
const returnHome = document.getElementById("home-btn");
const playQuizBtn = document.getElementById("play-btn");
const playQuiz = document.getElementById("quiz-area");
const homeIcon = document.getElementsByClassName("home-icon");
const questionElement = document.getElementById("question");
const answerButton1 = document.getElementById("answer-btn-1");
const answerButton2 = document.getElementById("answer-btn-2");
const answerButton3 = document.getElementById("answer-btn-3");
const answerButton4 = document.getElementById("answer-btn-4");
const nextButton = document.getElementById("next-btn");
const answerButtons = document.getElementsByClassName("answer-btn");
const restartButton = document.getElementById("restart-btn");
const questionCounterText = document.getElementById("current-question");
const scoreText = document.getElementById("current-score");
const endPage = document.getElementById("end-page");
const userCorrectQuestions = document.getElementById("user-correct-questions");
const userFinalScore = document.getElementById("user-score");
const timerElement = document.getElementById("timer");

let currentQuestion = {};
let score = 0;
let questionCounter = 0; // Displays the question the user is on
let availableQuestions = []; // Questions removed once they are used so they are not repeated
let correctQuestions = 0; // Increases with the increment score function
// let timer = setInterval(startTimer, 1000);
// let timeLeft = 20;
let timeLeft;
let timer;

// Constants
const correctPoints = 10;
const maxQuestions = 3;

// Event listeners

// Open rules area
openRulesBtn.addEventListener("click", () => {
    homeArea.classList.add("hidden");
    rulesArea.classList.remove("hidden");
})

// Close rules area
returnHome.addEventListener("click", () => {
    homeArea.classList.remove("hidden");
    rulesArea.classList.add("hidden");
});

// Opens quiz area
playQuizBtn.addEventListener("click", runQuiz);

// Return home
// Event listener loops through all of the home icons
for (let i = 0; i < homeIcon.length; i++) {
    homeIcon[i].addEventListener("click", () => {
        homeArea.classList.remove("hidden");
        playQuiz.classList.add("hidden");
        endPage.classList.add("hidden");
        score = 0;
        scoreText.innerText = 0;
    })
}

// Checks answers
answerButton1.addEventListener("click", checkAnswer);
answerButton2.addEventListener("click", checkAnswer);
answerButton3.addEventListener("click", checkAnswer);
answerButton4.addEventListener("click", checkAnswer);

// Next question
nextButton.addEventListener("click", nextQuestion);

// Restart quiz
restartButton.addEventListener("click", nextQuestion);

function runQuiz() {
    homeArea.classList.add("hidden");
    playQuiz.classList.remove("hidden");
    questionCounter = 0;
    score = 0;
    correctQuestions = 0;
    availableQuestions = [...quizQuestions]; // Full copy of questions
    getNewQuestion();
    // timeLeft = 20;
    startTimer()
}

function getNewQuestion() {
    
    // Takes user to end page once max number of questions have been reached
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        playQuiz.classList.add("hidden");
        endPage.classList.remove("hidden");
        userCorrectQuestions.innerText = `${correctQuestions}/${maxQuestions}`;
        userFinalScore.innerText = score;
    }

    // Increments the question counter
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${maxQuestions}`;

    // Randomises the order of the questions
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButton1.innerText = currentQuestion.a;
    answerButton2.innerText = currentQuestion.b;
    answerButton3.innerText = currentQuestion.c;
    answerButton4.innerText = currentQuestion.d;

    // Removes question that has just been used from availableQuestions array
    availableQuestions.splice(questionIndex, 1); // Code from https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=4

    // Ensures that users have to select an answer before continuing
    nextButton.setAttribute("disabled", "disabled");
    nextButton.classList.remove("hover");
    nextButton.classList.remove("bold");
}

function checkAnswer() {
    // Removes hover when an answer has been clicked
    answerButton1.classList.remove("hover");
    answerButton2.classList.remove("hover");
    answerButton3.classList.remove("hover");
    answerButton4.classList.remove("hover");

    // Prevents user clicking any other answers once one has been clicked
    answerButton1.setAttribute("disabled", "disabled");
    answerButton2.setAttribute("disabled", "disabled");
    answerButton3.setAttribute("disabled", "disabled");
    answerButton4.setAttribute("disabled", "disabled");

    // Allows users to click Next once they have answered
    nextButton.removeAttribute("disabled", "disabled");
    nextButton.classList.add("hover");

    // Checks whether the user answer is correct or not and changes the colour of the answer button accordingly
    let userAnswer = this.innerText;
    let correctAnswer = currentQuestion.answer;
    if (userAnswer === correctAnswer) {
        this.classList.add("correct");
        incrementScore(correctPoints);
        // clearInterval(timer);
        stopTimer();
    } else {
        this.classList.add("incorrect");
        // clearInterval(timer);
        stopTimer();
    }
}

// Generates the next question and reimplements the mouse hover and the ability to click the answer buttons
function nextQuestion() {
    timerElement.innerText = 20;
    startTimer()
    // timeLeft = 20;
    getNewQuestion();
    answerButton1.classList.add("hover");
    answerButton2.classList.add("hover");
    answerButton3.classList.add("hover");
    answerButton4.classList.add("hover");
    answerButton1.removeAttribute("disabled", "disabled");
    answerButton2.removeAttribute("disabled", "disabled");
    answerButton3.removeAttribute("disabled", "disabled");
    answerButton4.removeAttribute("disabled", "disabled");

    // Removes the colour of the answer buttons from the previous question
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("correct");
        answerButtons[i].classList.remove("incorrect");
    }
}

// Increments user score by 10 points for each correct question
// Code from https://www.youtube.com/watch?v=BOQLbu_Crc0&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=6
function incrementScore(num) {
    score += num;
    scoreText.innerText = score += timeLeft;
    correctQuestions++;
}

// function restartQuiz() {

// }

// function startTimer() {
//     timeLeft = 20;
//     timer = setInterval(function () {
//         timerElement.innerHTML = timeLeft;
//         timeLeft -= 1;
//     }, 1000);
// }

// function startTimer() {
//     timeLeft = 20;
//     timer = setInterval(function () {
        
//         if (timeLeft >= 0) {
//             timeLeft--;
//             timerElement.innerText = timeLeft;
//         } else {
//             clearInterval(timer);
//         }
//     })
// }

// Starts timer once quiz begins
// Code from https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz
// function startTimer() {
//     timerElement.innerText = timeLeft;
//     timeLeft--;
//     if (timeLeft === -1) {
//         clearInterval(timer);
//     }
// }

// = setInterval(startTimer, 1000)

// Sets timer to 20 seconds and decreases it every second
function startTimer() {
    timeLeft = 20;
    timer = setInterval(function () {
        countdown();
        timerElement.innerText = timeLeft;
    }, 1000);
}

// Counts down from 20 seconds on each question
// Prevetns user from clicking answer buttons once timer reaches 0, and boldens nextButton
function countdown() {
    let correctAnswer = currentQuestion.answer;
    let answerButtons = document.getElementsByClassName("answer-btn");
  
    if (timeLeft === 0) {
      stopTimer();
      nextButton.removeAttribute("disabled", "disabled");
      nextButton.classList.add("hover");
      nextButton.classList.add("bold");
      answerButton1.setAttribute("disabled", "disabled");
      answerButton2.setAttribute("disabled", "disabled");
      answerButton3.setAttribute("disabled", "disabled");
      answerButton4.setAttribute("disabled", "disabled");
      answerButton1.classList.remove("hover");
      answerButton2.classList.remove("hover");
      answerButton3.classList.remove("hover");
      answerButton4.classList.remove("hover");
    } else {
      timeLeft--;
    }
  }
  
//  Stops timer
  function stopTimer() {
    clearInterval(timer);
  }