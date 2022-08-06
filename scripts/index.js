const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");
const choices = document.querySelectorAll("button");
const choiceValues = [
  { key: "rock", emoji: "🪨" },
  { key: "paper", emoji: "🧻" },
  { key: "scissors", emoji: "✂️" },
];

let userChoiceSelected = "";
let computerChoiceSelected = "";
choices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoiceSelected = choiceValues.find(
      (element) => element.key === e.target.id
    );
    userChoice.innerHTML = userChoiceSelected.emoji;
    computerChoiceSelected = choiceValues[generateComputerChoice()];
    computerChoice.innerHTML = computerChoiceSelected.emoji;
    displayResult();
  })
);

function generateComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function displayResult() {
  const [userValue, computerValue] = [
    userChoiceSelected.key,
    computerChoiceSelected.key,
  ];

  let message = "";
  if (userValue === computerValue) {
    message = "Its a draw 😊!";
  } else {
    const winner = winnerChoice(userValue, computerValue);
    if (winner === userValue) {
      message = "You win 😊!";
    } else {
      message = "You lose 😔!";
    }
  }
  result.innerHTML = message;
}

const rulesResult = new Map([
  ["rock", "paper"],
  ["scissors", "rock"],
  ["paper", "scissors"],
]);

function winnerChoice(choice1, choice2) {
  // rock & scissors - rock wins
  // rock & paper - paper wins
  // scissors & paper - scissors wins
  const value = rulesResult.get(choice1);
  return choice2 === value ? choice2 : choice1;
}

export { winnerChoice };
