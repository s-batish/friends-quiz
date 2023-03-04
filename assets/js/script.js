// Constants for DOM elements
const homeArea = document.getElementById("quiz-container");
const rulesArea = document.getElementById("rules-area");
const openRulesBtn = document.getElementById("rules-btn");
const returnHome = document.getElementById("home-btn");
const playQuizBtn = document.getElementById("play-btn");
const highScoresBtn = document.getElementById("high-scores-btn");
const playQuiz = document.getElementById("quiz-area");
const homeIcon = document.getElementsByClassName("home-icon");
const questionElement = document.getElementById("question");
const answerButton1 = document.getElementById("answer-btn-1");
const answerButton2 = document.getElementById("answer-btn-2");
const answerButton3 = document.getElementById("answer-btn-3");
const answerButton4 = document.getElementById("answer-btn-4");
const nextButton = document.getElementById("next-btn");
const answerButtons = document.getElementsByClassName("answer-btn");
const restartButtons = document.getElementsByClassName("restart-btn");
const questionCounterText = document.getElementById("current-question");
const scoreText = document.getElementById("current-score");
const endPage = document.getElementById("end-page");
const userCorrectQuestions = document.getElementById("user-correct-questions");
const userFinalScore = document.getElementById("user-score");
const timerElement = document.getElementById("timer");
const saveScoresBtn = document.getElementById("save-score-btn");
const highScoresPage = document.getElementById("high-scores-page");
const username = document.getElementById("username");

let currentQuestion = {};
let score = 0;
let questionCounter = 0; // Displays the question the user is on
let availableQuestions = []; // Questions removed once they are used so they are not repeated
let correctQuestions = 0; // Increases with the increment score function
let timeLeft;
let timer;

// Constants for points for answering correctly and number of questions
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

// Opens high scores page
highScoresBtn.addEventListener("click", () => {
    highScoresPage.classList.remove("hidden");
    homeArea.classList.add("hidden");
})

// Return home
// Event listener loops through all of the home icons
for (let i = 0; i < homeIcon.length; i++) {
    homeIcon[i].addEventListener("click", () => {
        homeArea.classList.remove("hidden");
        playQuiz.classList.add("hidden");
        endPage.classList.add("hidden");
        highScoresPage.classList.add("hidden");
        score = 0;
        scoreText.innerText = 0;
        stopTimer();
        timeLeft = 20;
    })
}

// Checks answers
// Event listener loops through all of the answer buttons
for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", checkAnswer);
}

// Next question
nextButton.addEventListener("click", nextQuestion);

// Restart quiz
for (let i = 0; i < restartButtons.length; i++) {
    restartButtons[i].addEventListener("click", restartQuiz);
}

// Prevents user clicking Save Scores without inputting a username
// Code from https://www.youtube.com/watch?v=o3MF_JmQxYg&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=8
username.addEventListener("keyup", () => {
    saveScoresBtn.disabled = !username.value;
    if (username.value) {
        saveScoresBtn.classList.add("hover");
    }
})

// // Opens high scores page
saveScoresBtn.addEventListener("click", () => {
    highScoresPage.classList.remove("hidden");
    endPage.classList.add("hidden");
})

function runQuiz() {
    homeArea.classList.add("hidden");
    playQuiz.classList.remove("hidden");
    questionCounter = 0;
    score = 0;
    correctQuestions = 0;
    availableQuestions = [...quizQuestions]; // Full copy of questions
    getNewQuestion();
    timerElement.innerText = 20;
    startTimer();
    resetAnswerButtons();
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
    nextButton.classList.remove("hover", "bold");
}

function checkAnswer() {
    disableAnswerButtons();

    // Allows users to click Next once they have answered
    nextButton.removeAttribute("disabled", "disabled");
    nextButton.classList.add("hover");

    // Checks whether the user answer is correct or not and changes the colour of the answer button accordingly
    let userAnswer = this.innerText;
    let correctAnswer = currentQuestion.answer;
    if (userAnswer === correctAnswer) {
        this.classList.add("correct");
        incrementScore(correctPoints);
        stopTimer();
        goToEndPage()
    } else {
        this.classList.add("incorrect");
        stopTimer();
        goToEndPage()
    }
}

// Removes hover when an answer has been clicked
// Prevents user clicking any other answers once one has been clicked
function disableAnswerButtons() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("hover");
        answerButtons[i].setAttribute("disabled", "disabled");
    }
}

// Generates the next question and reimplements the mouse hover and the ability to click the answer buttons
function nextQuestion() {
    timerElement.innerText = 20;
    startTimer();
    getNewQuestion();
    resetAnswerButtons();
}

// Removes the colour of the answer buttons from the previous question
function resetAnswerButtons() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("correct");
        answerButtons[i].classList.remove("incorrect");
        answerButtons[i].classList.add("hover");
        answerButtons[i].removeAttribute("disabled", "disabled");
    }
}

// Increments user score by 10 points for each correct question
// Code from https://www.youtube.com/watch?v=BOQLbu_Crc0&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=6
function incrementScore(num) {
    score += num;
    scoreText.innerText = score += timeLeft;
    correctQuestions++;
}

function restartQuiz() {
    playQuiz.classList.remove("hidden");
    endPage.classList.add("hidden");
    timerElement.innerText = 20;
    stopTimer();
    runQuiz();
    scoreText.innerText = 0;
    resetAnswerButtons();
    clearTimeout
}

// Timer
// Sets timer to 20 seconds and decreases it every second
function startTimer() {
    timeLeft = 20;
    timer = setInterval(function () {
        countdown();
        timerElement.innerText = timeLeft;
    }, 1000);
}

// Counts down from 20 seconds on each question
// Prevents user from clicking answer buttons once timer reaches 0, and boldens nextButton
function countdown() {
      if (timeLeft === 0) {
      stopTimer();
      disableAnswerButtons();
      nextButton.removeAttribute("disabled", "disabled");
      nextButton.classList.add("hover", "bold");
    } else {
      timeLeft--;
    }
  }
  
//  Stops timer
  function stopTimer() {
    clearInterval(timer);
  }

// End page timeout
// Automatically goes to end page after 0.5s
function goToEndPage() {
        if (questionCounter === maxQuestions) {
            setTimeout (function() {
                endPage.classList.remove("hidden");
                playQuiz.classList.add("hidden");
            }, 500);
        } 
    }
