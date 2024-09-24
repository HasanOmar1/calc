const form = document.querySelector("form");
const firstInput = document.querySelector("#num1");
const secondInput = document.querySelector("#num2");
const imgsContainer = document.querySelector(".imgs-container");
const randomInput1 = document.querySelector(".random-1");
const randomInput2 = document.querySelector(".random-2");

randomInput1.addEventListener("click", () => {
  let randomNumbers = Math.ceil(Math.random() * 1000);
  firstInput.value = randomNumbers;
});

randomInput2.addEventListener("click", () => {
  let randomNumbers = Math.ceil(Math.random() * 1000);
  secondInput.value = randomNumbers;
});

function add(num1, num2) {
  return num1 + num2;
}

function appendImg(array, i, number) {
  if (array[i] === number) {
    const imgElement = document.createElement("img");
    imgsContainer.append(imgElement);
    imgElement.src = `../numbers/${number}.jpg`;
    imgElement.alt = number;
  }
}

function handleSubmit(e) {
  e.preventDefault();

  while (imgsContainer.firstChild) {
    imgsContainer.removeChild(imgsContainer.firstChild);
  }

  const firstInputValue = parseInt(firstInput.value);
  const secondInputValue = parseInt(secondInput.value);
  let result;

  result = add(firstInputValue, secondInputValue);

  let num1String = firstInputValue.toString().split("");
  let num2String = secondInputValue.toString().split("");
  let resultToString = result.toString().split("");

  for (let i = 0; i < num1String.length; i++) {
    appendImg(num1String, i, "0");
    appendImg(num1String, i, "1");
    appendImg(num1String, i, "2");
    appendImg(num1String, i, "3");
    appendImg(num1String, i, "4");
    appendImg(num1String, i, "5");
    appendImg(num1String, i, "6");
    appendImg(num1String, i, "7");
    appendImg(num1String, i, "8");
    appendImg(num1String, i, "9");
  }

  const imgElement = document.createElement("img");
  imgsContainer.append(imgElement);
  imgElement.src = `../numbers/+.jpg`;
  imgElement.classList.add("operator");
  imgElement.alt = "plus";

  for (let i = 0; i < num2String.length; i++) {
    appendImg(num2String, i, "0");
    appendImg(num2String, i, "1");
    appendImg(num2String, i, "2");
    appendImg(num2String, i, "3");
    appendImg(num2String, i, "4");
    appendImg(num2String, i, "5");
    appendImg(num2String, i, "6");
    appendImg(num2String, i, "7");
    appendImg(num2String, i, "8");
    appendImg(num2String, i, "9");
  }

  const equalImg = document.createElement("img");
  imgsContainer.append(equalImg);
  equalImg.src = "../numbers/=.jpg";
  equalImg.classList.add("operator");
  equalImg.alt = "equal";

  for (let i = 0; i < resultToString.length; i++) {
    appendImg(resultToString, i, "0");
    appendImg(resultToString, i, "1");
    appendImg(resultToString, i, "2");
    appendImg(resultToString, i, "3");
    appendImg(resultToString, i, "4");
    appendImg(resultToString, i, "5");
    appendImg(resultToString, i, "6");
    appendImg(resultToString, i, "7");
    appendImg(resultToString, i, "8");
    appendImg(resultToString, i, "9");
  }

  firstInput.value = "";
  secondInput.value = "";
}

form.addEventListener("submit", handleSubmit);
