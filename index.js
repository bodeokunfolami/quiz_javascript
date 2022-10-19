const questionElem = document.querySelector("#question");
const leftListElem = document.querySelector("#left-list");
const rightListElem = document.querySelector("#right-list");
const optionElemList = document.querySelectorAll(".option");
// Data
const questions = [
  {
    question: "Which of these programing language is not dynamically typed?",
    a: "Java",
    b: "Ruby",
    c: "Python",
    d: "Javascript",
    answer: "Java",
  },
  {
    question: "Python was created by Guido Van Rossum in what year?",
    a: "2005",
    b: "1984",
    c: "1991",
    d: "1992",
    answer: "1991",
  },
  {
    question:
      "The runtime environment that enables javascript to run on the server is called?",
    a: "Aplinejs",
    b: "webpack",
    c: "Babel",
    d: "Nodejs",
    answer: "Nodejs",
  },
];

function getRadioElem(value) {
  return `<input type="radio" name="option" id="${value}" value="${value}">`;
}

function createDivElem(radio, option) {
  return `<div>${radio} ${option}</div>`;
}

let currentIndex = 0;
let ques = questions[currentIndex];

questionElem.insertBefore(
  document.createTextNode(questions[currentIndex].question),
  null
);

let radio = getRadioElem;

optionElemList.forEach((elem) => {
  elem.insertBefore(createTextNode(ques));
});

// // prettier-ignore
// leftListElem.innerHTML = `${createDivElem(radio(ques.a), ques.a)}${createDivElem(radio(ques.b), ques.b)}`;

// // prettier-ignore
// rightListElem.innerHTML = `${createDivElem(radio(ques.c), ques.c)}${createDivElem(radio(ques.d), ques.d)}`;
