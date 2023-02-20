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

let currentQuestion = {};
let score = 0;
let questionNumber = 0; // Displays the question the user is on
let availableQuestions = []; // Questions removed once they are used so they are not repeated
let shuffledQuestions, currentQuestionIndex;

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

function runQuiz() {
    homeArea.classList.add("hidden");
    playQuiz.classList.remove("hidden");
    questionNumber = 0;
    score = 0;
    availableQuestions = [...quizQuestions]; // Full copy of questions
    console.log(availableQuestions);
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
    availableQuestions.splice(questionIndex, 1); // Code taken from https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=4
}

// function runQuiz() {
//     console.log("started");
//     homeArea.classList.add("hidden");
//     shuffledQuestions = quizQuestions.sort(() => Math.random() - .5); // Code to shuffle questions from https://www.youtube.com/watch?v=riDzcEQbX6k&t=1419s
//     currentQuestionIndex = 0;
//     playQuiz.classList.remove("hidden");
//     setNextQuestion();
// }

// function setNextQuestion() {
//     showQuestion(shuffledQuestions[currentQuestionIndex]);
// }

// function showQuestion(question) {
//     questionElement.innerText = question.question;
//     question.answers
// }



// function checkAnswer() {

// }

// function incrementScore() {

// }

// function nextQuestion() {

// }

// function restartQuiz() {
    
// }