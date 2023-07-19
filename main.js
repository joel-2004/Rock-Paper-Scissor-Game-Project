// const userRock = document.getElementById("rock");
// const userPaper = document.getElementById("paper");
// const userScissor = document.getElementById("scissor");
// console.log(choice);


const CPUOption = ["scissor", "rock", "paper"];
let cpuChoice = null;

let cpuScore = 0;
let userScore = 0;

const val = document.getElementById("scissor");
const val1 = document.getElementById("rock");
const val2 = document.getElementById("paper");
val.addEventListener("click", () => {
    let res = "";
    cpuChoice = CPUOption[Math.floor(Math.random() * 3)];
    console.log(val.value, cpuChoice);
    if (val.value === cpuChoice) {
        res = "Drew";

    }
    else if (cpuChoice == "rock") {
        res = "loose";
        cpuScore++;

    } else {
        res = "win";
        userScore++;
    }

    let inp = document.getElementById("res");
    inp.style.display = "inline";
    inp.value = "you " + res;

    let cpu = document.getElementById('cpu');
    cpu.style.display = "inline";
    cpu.value = "Cpu Choice " + cpuChoice;

    let cpuScoreAns = document.getElementById("cpuScore");
    cpuScoreAns.style.display = "inline";
    cpuScoreAns.value = "Cpu Score: " + cpuScore;

    let userScoreAns = document.getElementById("userScore");
    userScoreAns.style.display = "inline";
    userScoreAns.value = "User Score: " + userScore;
}, false);


val1.addEventListener("click", () => {
    let res = "";
    cpuChoice = CPUOption[Math.floor(Math.random() * 3)];
    console.log(val1.value + " " + cpuChoice);
    if (val1.value === cpuChoice) {
        res = "Drew";
    }
    else if (cpuChoice === "paper") {
        res = "loose";
        cpuScore++;
    }
    else {
        res = "win";
        userScore++;
    }
    let inp = document.getElementById("res");
    inp.style.display = "inline";
    inp.value = "you " + res;

    let cpu = document.getElementById('cpu');
    cpu.style.display = "inline";
    cpu.value = "Cpu Choice " + cpuChoice;


    let cpuScoreAns = document.getElementById("cpuScore");
    cpuScoreAns.style.display = "inline";
    cpuScoreAns.value = "Cpu Score: " + cpuScore;

    let userScoreAns = document.getElementById("userScore");
    userScoreAns.style.display = "inline";
    userScoreAns.value = "User Score: " + userScore;
})


val2.addEventListener("click", () => {
    let res = "";
    cpuChoice = CPUOption[Math.floor(Math.random() * 3)];
    console.log(val1.value + " " + cpuChoice);
    if (val2.value === cpuChoice) {
        res = "Drew";
    }
    else if (cpuChoice === "scissor") {
        res = "loose";
        cpuScore++;
    }
    else {
        res = "win";
        userScore++;
    }
    let inp = document.getElementById("res");
    inp.style.display = "inline";
    inp.value = "you " + res;

    let cpu = document.getElementById('cpu');
    cpu.style.display = "inline";
    cpu.value = "Cpu Choice " + cpuChoice;

    let cpuScoreAns = document.getElementById("cpuScore");
    cpuScoreAns.style.display = "inline";
    cpuScoreAns.value = "Cpu Score: " + cpuScore;

    let userScoreAns = document.getElementById("userScore");
    userScoreAns.style.display = "inline";
    userScoreAns.value = "User Score: " + userScore;
})

function fun() {
    location.reload();
}
