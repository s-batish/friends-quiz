const rulesArea = document.querySelector(".rules-area");
const openRulesBtn = document.querySelector(".rules-btn");
const returnHome = document.querySelector(".home-btn");
const playQuizBtn = document.querySelector(".play-btn");
const playQuiz = document.querySelector(".quiz-area");
const homeIcon = document.querySelector(".home-icon");

// Event listeners

// Open rules area
openRulesBtn.addEventListener("click", function(){
    rulesArea.classList.remove("hidden");
})

// Close rules area
returnHome.addEventListener("click", function(){
    rulesArea.classList.add("hidden");
});

// Opens quiz area
playQuizBtn.addEventListener("click", function(){
    playQuiz.classList.remove("hidden");
})

// Return home
homeIcon.addEventListener("click", function(){
    playQuiz.classList.add("hidden");
})