const quizData = [
  {
    question: "what is the word for this card?",
    image: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    a: "earth",
    b: "country",
    c: "world",
    d: "train",
    correct: "c",
  },
  {
    question: "What does CSS stand for?",
    image: "https://images.unsplash.com/photo-1504542982118-59308b40fe0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    image: "https://images.unsplash.com/photo-1585617205014-f3faf04343c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const image = document.getElementById('image');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// Quiz starts from the frist element of array 
let currentQuiz = 0;
// Score starts from 0
let score = 0;

loadQuiz()

// Get current quiz 
function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]
  
  questionEl.innerText = currentQuizData.question
  image.src = currentQuizData.image;
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

// Clear the inputs 
function deselectAnswers () {
  answerEls.forEach (answerEl => answerEl.checked = false)
}

// Select answer
function getSelected() {
  let answer;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

// Submit btn 
submitBtn.addEventListener('click', () => {
  const submitAudio = document.getElementById('submitAudio');
  submitAudio.play();
  const answer = getSelected()
  // Check if it gets an answer
  if (answer) {
    //Check if the answer matches
    if (answer === quizData[currentQuiz].correct) {
      score++
      
    }
    // Move on to the next quiz
    currentQuiz++

    // If the quiz is NOT end of the array, load a new question
    if (currentQuiz < quizData.length) {
      loadQuiz();

    } else {
      quiz.innerHTML = `
        <h2>You answered correctly at ${score}/${quizData.length} questions correctly</h2>
        <button onclick="playReloadAudio()">Reload</button>
      `;
      const resultAudio = document.getElementById('resultAudio');
      resultAudio.play();
    }
  }
})

function playReloadAudio() {
  const reloadAudio = document.getElementById('reloadAudio');
  reloadAudio.play();
  // This syntax reloads the page
  location.reload();
}

