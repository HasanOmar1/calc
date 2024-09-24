const form = document.querySelector("form");
const submitMsg = document.querySelector(".submit-msg");
const submitFormBtn = document.querySelector("#submit-btn");
const newExamBtn = document.querySelector("#new-exam");

// 1
let firstNum1 = document.querySelector("#first-num-1");
let secondNum1 = document.querySelector("#second-num-1");
let result1 = document.querySelector("#result-num-1");
let emoji1 = document.querySelector("#emoji-1");
let correctAnswer1 = document.querySelector(".correct-answer-1");
firstNum1.innerText = parseInt(Math.ceil(Math.random() * 12));
secondNum1.innerText = parseInt(Math.ceil(Math.random() * 12));

// 2
let firstNum2 = document.querySelector("#first-num-2");
let secondNum2 = document.querySelector("#second-num-2");
let result2 = document.querySelector("#result-num-2");
let emoji2 = document.querySelector("#emoji-2");
let correctAnswer2 = document.querySelector(".correct-answer-2");
firstNum2.innerText = parseInt(Math.ceil(Math.random() * 12));
secondNum2.innerText = parseInt(Math.ceil(Math.random() * 12));

// 3
let firstNum3 = document.querySelector("#first-num-3");
let secondNum3 = document.querySelector("#second-num-3");
let result3 = document.querySelector("#result-num-3");
let emoji3 = document.querySelector("#emoji-3");
let correctAnswer3 = document.querySelector(".correct-answer-3");
firstNum3.innerText = parseInt(Math.ceil(Math.random() * 12));
secondNum3.innerText = parseInt(Math.ceil(Math.random() * 12));

// 4
let firstNum4 = document.querySelector("#first-num-4");
let secondNum4 = document.querySelector("#second-num-4");
let result4 = document.querySelector("#result-num-4");
let emoji4 = document.querySelector("#emoji-4");
let correctAnswer4 = document.querySelector(".correct-answer-4");
firstNum4.innerText = parseInt(Math.ceil(Math.random() * 12));
secondNum4.innerText = parseInt(Math.ceil(Math.random() * 12));

let numberOfCorrectAnswers = 0;

function ifStatementFunction(num1, num2, result, emoji, correctAnswer) {
  let sum = parseInt(num1.innerText) * parseInt(num2.innerText);
  if (sum === parseInt(result.value)) {
    emoji.innerText = "✔";
    emoji.classList.add("correct");
    numberOfCorrectAnswers++;
  } else {
    emoji.innerText = "❌";
    correctAnswer.innerText = `The Correct Answer is : ${sum}`;
    correctAnswer.classList.add("wrong-border");
  }
}
function handleSubmit(e) {
  e.preventDefault();
  ifStatementFunction(firstNum1, secondNum1, result1, emoji1, correctAnswer1);
  ifStatementFunction(firstNum2, secondNum2, result2, emoji2, correctAnswer2);
  ifStatementFunction(firstNum3, secondNum3, result3, emoji3, correctAnswer3);
  ifStatementFunction(firstNum4, secondNum4, result4, emoji4, correctAnswer4);

  submitMsg.innerText = `You Got ${numberOfCorrectAnswers} Correct Answers!`;

  result1.disabled = true;
  result2.disabled = true;
  result3.disabled = true;
  result4.disabled = true;

  submitFormBtn.disabled = true;
}

form.addEventListener("submit", handleSubmit);
newExamBtn.addEventListener("click", () => {
  window.location.reload();
});
