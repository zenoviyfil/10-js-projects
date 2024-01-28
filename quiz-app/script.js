const quizQuestions = [
  {
    question: "Is the Earth flat?",
    a: "Yes",
    b: "No",
    correct: "b",
  },
  {
    question: "Mercedes vs BMW",
    a: "Mercedes",
    b: "BMW",
    correct: "b",
  },
  {
    question: "JavaScript vs Java",
    a: "JavaScript",
    b: "Java",
    correct: "a",
  },
  {
    question: "Is the Earth flat?",
    a: "Yes",
    b: "No",
    correct: "b",
  },
  {
    question: "Mercedes vs BMW",
    a: "Mercedes",
    b: "BMW",
    correct: "b",
  },
  {
    question: "JavaScript vs Java",
    a: "JavaScript",
    b: "Java",
    correct: "a",
  },
  {
    question: "Is the Earth flat?",
    a: "Yes",
    b: "No",
    correct: "b",
  },
  {
    question: "Mercedes vs BMW",
    a: "Mercedes",
    b: "BMW",
    correct: "b",
  },
  {
    question: "JavaScript vs Java",
    a: "JavaScript",
    b: "Java",
    correct: "a",
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselect();

  const currentQuizData = quizQuestions[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
}

function selected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselect() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = selected();

  if (answer) {
    if (answer === quizQuestions[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizQuestions.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>Correct answers ${score}/${quizQuestions.length} .</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});