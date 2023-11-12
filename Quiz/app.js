const questions = [
  {
    question: "what's the largest animal ?",
    answer: [
      { text: "shark", correct: false },
      { text: "blue whale", correct: true },
      { text: "elephant", correct: false },
      { text: "giraffe", correct: false },
    ],
  },
  {
    question: "what's the smmalest country ?",
    answer: [
      { text: "vaticna city", correct: true },
      { text: "buhtan ", correct: false },
      { text: "nepal", correct: false },
      { text: "shri lanka", correct: false },
    ],
  },
  {
    question: "what's the largest desert ?",
    answer: [
      { text: "kalahari", correct: false },
      { text: "gobi ", correct: false },
      { text: "sahra", correct: false },
      { text: "antartica", correct: true },
    ],
  },
  {
    question: "what's the smallest continent ?",
    answer: [
      { text: "Asia", correct: false },
      { text: "australia ", correct: true },
      { text: "europe", correct: false },
      { text: "africa", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNum + "." + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function handleNext() {
  currentQuestionIndex++;
  if (questions.length > currentQuestionIndex) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNext();
  } else {
    startQuiz();
  }
});

startQuiz();
