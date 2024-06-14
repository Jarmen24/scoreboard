let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
let homeScoreCount = 0;
let guestScoreCount = 0;
function homeAddOne() {
    homeScoreCount += 1;
    homeScore.textContent = homeScoreCount;
    leadScore();
}

function homeAddTwo() {
    homeScoreCount += 2;
    homeScore.textContent = homeScoreCount;
    leadScore();
}

function homeAddThree() {
    homeScoreCount += 3;
    homeScore.textContent = homeScoreCount;
    leadScore();
}

function guestAddOne() {
    guestScoreCount += 1;
    guestScore.textContent = guestScoreCount;
    leadScore();
}

function guestAddTwo() {
    guestScoreCount += 2;
    guestScore.textContent = guestScoreCount;
    leadScore();
}

function guestAddThree() {
    guestScoreCount += 3;
    guestScore.textContent = guestScoreCount;
    leadScore();
}

function leadScore() {
    if (homeScoreCount > guestScoreCount) {
        homeScore.style.color = "yellow";
        guestScore.style.color = "#F94F6D";
    } else {
        guestScore.style.color = "yellow";
        homeScore.style.color = "#F94F6D";
    }
}