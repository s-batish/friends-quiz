const rulesArea = document.querySelector(".rules-area");
const openRulesBtn = document.querySelector(".rules-btn");
const returnHome = document.querySelector(".home-btn");
const playQuizBtn = document.querySelector(".play-btn");
const playQuiz = document.querySelector(".quiz-area");
const homeIcon = document.querySelector(".home-icon");

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
    playQuiz();
})

// Return home
homeIcon.addEventListener("click", () => {
    playQuiz.classList.add("hidden");
})

function playQuiz() {

}

function showQuestion() {

}

function checkAnswer() {

}

function incrementScore() {

}

function nextQuestion() {
    
}