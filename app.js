const pScore = document.getElementById('pScore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const cScore = document.getElementById('cScore');
const choices = ['rock','paper','scissors'];
let userChoice;
let compChoice;
let playerScore = 0;
let compScore = 0;

// const buttons = document.getElementsByClassName("buttons");

const handleClick = (e) =>{
    userChoice = e.target.id;
    generateComputerChoice();
    getResult();
};

rock.addEventListener('click',handleClick);
paper.addEventListener('click',handleClick);
scissors.addEventListener('click',handleClick);

const generateComputerChoice = () =>{
    const randChoice = choices[Math.floor(Math.random() * choices.length)];
    compChoice = randChoice;
    console.log(compChoice);
}

const getResult = () =>{
    switch (userChoice + compChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
          pScore.textContent = ++playerScore;
          break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
          cScore.textContent = ++compScore;
          break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
         cScore.textContent = ++compScore;
         pScore.textContent = ++playerScore;
        break
      }
}