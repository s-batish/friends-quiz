const rulesArea = document.getElementById("rules-area");
const openRulesBtn = document.getElementById("rules-btn");
const returnHome = document.getElementById("home-btn");
const playQuizBtn = document.getElementById("play-btn");
const playQuiz = document.getElementById("quiz-area");
const homeIcon = document.getElementById("home-icon");
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



// function runQuiz() {

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