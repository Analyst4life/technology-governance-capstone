// Technology Governance Assessment
console.log("Technology Governance Assessment is ready.");

// Get elements from the page
const factorChecks = document.querySelectorAll(".factor-check");
const scoreDisplay = document.getElementById("score-display");
const priorityDisplay = document.getElementById("priority-display");
const practiceSelect = document.getElementById("practice-select");

// Store assessment results separately for each practice
const assessmentData = {
    "it-decision": {},
    "management": {},
    "communication": {},
    "alignment": {},
    "adaptive": {}
};

let currentPractice = practiceSelect.value;

// Calculate and display the score for the selected practice
function updateScore() {
    let totalScore = 0;

    factorChecks.forEach(function(factor) {
        if (factor.checked) {
            totalScore += Number(factor.dataset.points);
        }
    });

    scoreDisplay.textContent = "Total Score: " + totalScore + " / 49";

    let priority;

    if (totalScore === 0) {
        priority = "Not yet calculated";
    } else if (totalScore <= 16) {
        priority = "Low";
    } else if (totalScore <= 32) {
        priority = "Medium";
    } else {
        priority = "High";
    }

    priorityDisplay.textContent = "Priority: " + priority;

    // Update the results table for the selected practice
    const hasAssessment =
        Object.keys(assessmentData[currentPractice]).length > 0;

    if (hasAssessment) {
        document.getElementById("score-" + currentPractice).textContent =
            totalScore + " / 49";

        document.getElementById("priority-" + currentPractice).textContent =
            priority;
    }

    updateRanks();
}

// Rank assessed practices from highest score to lowest score
function updateRanks() {
    const practices = [
        {
            scoreId: "score-it-decision",
            rankId: "rank-it-decision"
        },
        {
            scoreId: "score-management",
            rankId: "rank-management"
        },
        {
            scoreId: "score-communication",
            rankId: "rank-communication"
        },
        {
            scoreId: "score-alignment",
            rankId: "rank-alignment"
        },
        {
            scoreId: "score-adaptive",
            rankId: "rank-adaptive"
        }
    ];

    const assessedPractices = practices
        .map(function(practice) {
            const scoreText =
                document.getElementById(practice.scoreId).textContent;

            return {
                rankId: practice.rankId,
                score: parseInt(scoreText)
            };
        })
        .filter(function(practice) {
            return !isNaN(practice.score);
        })
        .sort(function(a, b) {
            return b.score - a.score;
        });

    // Clear existing ranks
    practices.forEach(function(practice) {
        document.getElementById(practice.rankId).textContent = "—";
    });

    // Assign new ranks
    assessedPractices.forEach(function(practice, index) {
        document.getElementById(practice.rankId).textContent = index + 1;
    });
}

// Save checkbox selections for the current practice
factorChecks.forEach(function(factor) {
    factor.addEventListener("change", function() {
        assessmentData[currentPractice][factor.dataset.points] =
            factor.checked;

        updateScore();
    });
});

// Load the assessment for a different practice
practiceSelect.addEventListener("change", function() {
    currentPractice = practiceSelect.value;

    factorChecks.forEach(function(factor) {
        factor.checked =
            assessmentData[currentPractice][factor.dataset.points] || false;
    });

    updateScore();
});

// Load the initial practice
factorChecks.forEach(function(factor) {
    factor.checked =
        assessmentData[currentPractice][factor.dataset.points] || false;
});

// Display the initial score
updateScore();