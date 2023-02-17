const rulesArea = document.querySelector(".rules-area");
const openRulesBtn = document.querySelector(".rules-btn");
const returnHome = document.querySelector(".home-btn");
const playQuizBtn = document.querySelector(".play-btn");
const playQuiz = document.querySelector(".quiz-area");
const homeIcon = document.querySelector(".home-icon");
const question = document.getElementById("question");

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
    rulesArea.classList.remove("hidden");
})

// Close rules area
returnHome.addEventListener("click", () => {
    rulesArea.classList.add("hidden");
});

// Opens quiz area
playQuizBtn.addEventListener("click", () => {
    playQuiz.classList.remove("hidden");
})

// Return home
homeIcon.addEventListener("click", () => {
    playQuiz.classList.add("hidden");
})


// function playQuiz() {

// }

// function showQuestion() {

// }

// function checkAnswer() {

// }

// function incrementScore() {

// }

// function nextQuestion() {

// }

// function restartQuiz() {
    
// }