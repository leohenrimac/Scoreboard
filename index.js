
let scoreHome = 0;
let scoreGuest = 0;
let historyHome = [];
let historyGuest = [];
let scoreGameHome = 0;
let scoreGameGuest = 0;


function add1Home() {
    scoreHome += 1 ;
    document.getElementById("home-score").textContent = scoreHome;
    historyHome.push(1);
    document.getElementById("last-home").textContent = historyHome[historyHome.length - 1];
}

function add2Home() {
    scoreHome += 2 ;
    document.getElementById("home-score").textContent = scoreHome;
    historyHome.push(2);
    document.getElementById("last-home").textContent = historyHome[historyHome.length - 1];
}

function add3Home() {
    scoreHome += 3;
    document.getElementById("home-score").textContent = scoreHome;
    historyHome.push(3);
    document.getElementById("last-home").textContent = historyHome[historyHome.length - 1];
}

function add1Guest() {
    scoreGuest += 1;
    document.getElementById("guest-score").textContent = scoreGuest;
    historyGuest.push(1);
    document.getElementById("last-guest").textContent = historyGuest[historyGuest.length - 1];
}

function add2Guest() {
    scoreGuest += 2;
    document.getElementById("guest-score").textContent = scoreGuest;
    historyGuest.push(2);
    document.getElementById("last-guest").textContent = historyGuest[historyGuest.length - 1];
}

function add3Guest() {
    scoreGuest += 3;
    document.getElementById("guest-score").textContent = scoreGuest;
    historyGuest.push(3);
    document.getElementById("last-guest").textContent = historyGuest[historyGuest.length - 1];
}

function undoHome() {
    if (historyHome.length > 0) {
        let num = historyHome.pop();
        scoreHome -= num;
        document.getElementById("home-score").textContent = scoreHome;
        document.getElementById("last-home").textContent = historyHome[historyHome.length - 1];
    } else {
        return 0;
    }
}

function undoGuest() {
    if (historyGuest.length > 0) {
        let num = historyGuest.pop();
        scoreGuest -= num;
        document.getElementById("guest-score").textContent = scoreGuest;
        document.getElementById("last-guest").textContent = historyGuest[historyGuest.length - 1];
    } else {
        return 0;
    }
}

function clearAll() {
    scoreHome = 0;
    document.getElementById("home-score").textContent = scoreHome;
    scoreGuest = 0;
    document.getElementById("guest-score").textContent = scoreGuest;
    historyHome = [];
    historyGuest = [];
    document.getElementById("last-home").textContent = historyHome[historyHome.length - 1];
    document.getElementById("last-guest").textContent = historyGuest[historyGuest.length - 1];
}

function finishGame() {
    if(scoreHome > scoreGuest) {
        window.alert("HOME WINS!");
        scoreGameHome += 1;
        document.getElementById("score-game-home").textContent = scoreGameHome;
        clearAll();
    }
    else if(scoreHome < scoreGuest){
        window.alert("GUEST WINS!");
        scoreGameGuest += 1;
        document.getElementById("score-game-guest").textContent = scoreGameGuest;
        clearAll();
    }
    else {
        window.alert("It is a tie!");
        clearAll();
    }
}

function clearHistory() {
    scoreGameHome = 0;
    document.getElementById("score-game-home").textContent = scoreGameHome;
    scoreGameGuest = 0;
    document.getElementById("score-game-guest").textContent = scoreGameGuest;
}