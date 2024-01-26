let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score"); 
const compScorepara = document.querySelector("#comp-score"); 
const draw = () => {
    
    msg.innerText = "Game was Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
};
const genCompChoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const showWinner = (userwin) => {
    if(userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        
        msg.innerText = "You have won!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        
        msg.innerText = "You have lost!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    const compchoice = genCompChoice();
    console.log("compCoice = ", compchoice);

    if(userChoice === compchoice) {
        draw();
    } else {
        let userwin = true;
        if(userChoice === "rock") {
                userwin = compchoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true; 
        }
        showWinner(userwin);
    }
};

    

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
    console.log("choices was clicked", userChoice);
    playGame(userChoice);
    });
});






