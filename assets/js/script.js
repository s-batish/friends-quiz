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
    answerButton1.onclick = checkAnswer();
    answerButton2.onclick = checkAnswer();
    answerButton3.onclick = checkAnswer();
    answerButton4.onclick = checkAnswer();

// Removes question that has just been used from availableQuestions array
    availableQuestions.splice(questionIndex, 1); // Code from https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=4
}

function checkAnswer() {
    let userAnswer = this.innerText;
    let correctAnswer = currentQuestion.answer;
    if (userAnswer === correctAnswer) {
        this.style.backgroundColor = "green";
        incrementScore();
    } else {
        this.style.backgroundColor = "red";
    }
}


// function checkAnswer() {

// }

// function incrementScore() {

// }

// function nextQuestion() {

// }

// function restartQuiz() {
    
// }