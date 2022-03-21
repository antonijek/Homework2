
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions;
let currentQuestionIndex;


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text

        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct') 
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



const questions = [
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's ?",
        answers: [
            { text: "A: largest railway station", correct: true },
            { text: "B: highest railway station", correct: false },
            { text: 'C: longest railway station', correct: false },
            { text: "D: None of the above", correct: false }
        ]
    },
    {
        question: "Entomology is the science that studies ?",
        answers: [
            { text: "A: Behavior of human beings", correct: false },
            { text: "B: Insects", correct: true },
            { text: "C: The origin and history of technical and scientific terms", correct: false },
            { text: "D: The formation of rocks", correct: false }
        ]
    },
    {
        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of ?",
        answers: [
            { text: "A: Asia", correct: false },
            { text: "B: Africa", correct: true },
            { text: 'C: Europe', correct: false },
            { text: "D: Australia", correct: false }
        ]
    },
    {
        question: "Garampani sanctuary is located at ?",
        answers: [
            { text: "A: Junagarh, Gujarat", correct: true },
            { text: "B: Diphu, Assam", correct: false },
            { text: 'C: Kohima, Nagaland', correct: false },
            { text: "D: Gangtok, Sikkime", correct: false }
        ]
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        answers: [
            { text: "A: Physics and Chemistry", correct: false },
            { text: "B: Physiology or Medicine", correct: false },
            { text: 'C: Literature, Peace and Economics', correct: true },
            { text: "D: All of the above", correct: false }
        ]
    },
    {
        question: "Hitler party which came into power in 1933 is known as ?",
        answers: [
            { text: "A: Labour Party", correct: false },
            { text: "B: Nazi Party", correct: true },
            { text: 'C: Ku-Klux-Klan', correct: false },
            { text: "D: Democratic Party", correct: false }
        ]
    },
    {
        question: "Galileo was an Italian astronomer who ?",
        answers: [
            { text: "A: developed the telescope", correct: false },
            { text: "B: discovered four satellites of Jupiter", correct: false },
            { text: 'C: discovered that the movement of pendulum produces a regular time measurement', correct: false },
            { text: "D: All of the above", correct: true }
        ]
    },
    {
        question: "Fire temple is the place of worship of which of the following religion? ?",
        answers: [
            { text: "A: Taoism", correct: false },
            { text: "B: Judaism", correct: false },
            { text: 'C: Zoroastrianism (Parsi Religion)', correct: true },
            { text: "D: Shintoism", correct: false }
        ]
    },
    {
        question: "Film and TV institute of India is located at ?",
        answers: [
            { text: "A: Pune (Maharashtra)", correct: true },
            { text: "B: Rajkot (Gujarat)", correct: false },
            { text: 'C: Pimpri (Maharashtra)', correct: true },
            { text: "D: Perambur (Tamilnadu)", correct: false }
        ]
    },
    {
        question: "During World War II, when did Germany attack France?",
        answers: [
            { text: "A: 1940", correct: true },
            { text: "B: 1941", correct: false },
            { text: "C: 1942", correct: false },
            { text: "D: 1943", correct: false }
        ]
    }

]