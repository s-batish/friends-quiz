const rulesModal = document.querySelector(".rules-modal");
const openRulesBtn = document.querySelector(".rules-btn");
const returnHome = document.querySelector(".home-btn");

// Open rules modal

const openRules = function() {
    rulesModal.classList.remove("hidden");
}

openRulesBtn.addEventListener("click", openRules);

// Close rules modal

const closeRules = function() {
    rulesModal.classList.add("hidden");
}

returnHome.addEventListener("click", closeRules);