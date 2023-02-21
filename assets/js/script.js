const homeArea = document.getElementById("quiz-container");
const rulesArea = document.getElementById("rules-area");
const openRulesBtn = document.getElementById("rules-btn");
const returnHome = document.getElementById("home-btn");
const playQuizBtn = document.getElementById("play-btn");
const playQuiz = document.getElementById("quiz-area");
const homeIcon = document.getElementById("home-icon");
const questionElement = document.getElementById("question");
const answerButton1 = document.getElementById("answer-btn-1");
const answerButton2 = document.getElementById("answer-btn-2");
const answerButton3 = document.getElementById("answer-btn-3");
const answerButton4 = document.getElementById("answer-btn-4");
const nextButton = document.getElementById("next-btn");
const answerButtons = document.getElementsByClassName("answer-btn");
const restartButton = document.getElementById("restart-btn");

let currentQuestion = {};
let score = 0;
let questionNumber = 0; // Displays the question the user is on
let availableQuestions = []; // Questions removed once they are used so they are not repeated

// Constants
const correctPoints = 10;
const maxQuestions = 10;

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
homeIcon.addEventListener("click", () => {
    homeArea.classList.remove("hidden");
    playQuiz.classList.add("hidden");
})

// Checks answers
answerButton1.addEventListener("click", checkAnswer);
answerButton2.addEventListener("click", checkAnswer);
answerButton3.addEventListener("click", checkAnswer);
answerButton4.addEventListener("click", checkAnswer);

// Next question
nextButton.addEventListener("click", nextQuestion);

// Restart quiz
restartButton.addEventListener("click", runQuiz);

function runQuiz() {
    homeArea.classList.add("hidden");
    playQuiz.classList.remove("hidden");
    questionNumber = 0;
    score = 0;
    availableQuestions = [...quizQuestions]; // Full copy of questions
    getNewQuestion();
}

function getNewQuestion() {
    questionNumber++;
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

    let userAnswer = this.innerText;
    let correctAnswer = currentQuestion.answer;
    if (userAnswer === correctAnswer) {
        this.classList.add ("correct");
    } else {
        this.classList.add ("incorrect");
    }
}

function nextQuestion() {
    getNewQuestion()
    answerButton1.classList.add("hover");
    answerButton2.classList.add("hover");
    answerButton3.classList.add("hover");
    answerButton4.classList.add("hover");
    answerButton1.removeAttribute("disabled", "disabled");
    answerButton2.removeAttribute("disabled", "disabled");
    answerButton3.removeAttribute("disabled", "disabled");
    answerButton4.removeAttribute("disabled", "disabled");
    for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].classList.remove("correct");
    answerButtons[i].classList.remove("incorrect");
    }
}

// function incrementScore() {

// }

// function restartQuiz() {
    
// }