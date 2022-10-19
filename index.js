const questionElem = document.querySelector("#question");
const leftListElem = document.querySelector("#left-list");
const rightListElem = document.querySelector("#right-list");
const optionElemList = document.querySelectorAll(".option");
const successAlert = document.querySelector("#success");
const dangerAlert = document.querySelector("#danger");
const submitBtn = document.querySelector("#submit");
const nextBtn = document.querySelector("#next");
// Data
const questions = [
  {
    question: "Which of these programing language is not dynamically typed?",
    options: ["Java", "Ruby", "Python", "Javascript"],
    answer: "Java",
  },
  {
    question: "Python was created by Guido Van Rossum in what year?",
    options: ["2005", "1984", "1991", "1992"],
    answer: "1991",
  },
  {
    question:
      "The runtime environment that enables javascript to run on the server is called?",
    options: ["Aplinejs", "webpack", "Babel", "Nodejs"],
    answer: "Nodejs",
  },
];

let currentIndex = 0;

function showCurrentQuestion() {
  let ques = questions[currentIndex];
  questionElem.innerHTML = ques.question;

  optionElemList.forEach((elem, index) => {
    elem.children[0].value = ques.options[index];
    elem.children[1].innerHTML = ques.options[index];
  });
}

submitBtn.addEventListener("click", (e) => {
  let ques = questions[currentIndex];
  const radioElem = document.querySelector("input[type=radio]:checked");
  if (radioElem.value == ques.answer) {
    successAlert.classList.remove("d-none");
    dangerAlert.classList.add("d-none");
  } else {
    dangerAlert.classList.remove("d-none");
    successAlert.classList.add("d-none");
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex === questions.length - 1) return;
  currentIndex++;
  showCurrentQuestion();
});

showCurrentQuestion();
