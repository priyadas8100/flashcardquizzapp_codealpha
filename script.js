const questions = [
    {
        question: "Who developed C programming language?",
        answers: [
            {text: "Charles Babbage",correct: false},
            {text: "Tim berners-Lee",correct: false},
            {text: "Al-Khwarizmi",correct: false},
            {text: "Dennis Ritchie",correct: true},

        ]
    },
    {
        question:"The third generation computer used....",
        answers: [
            {text: "Transistors",correct: false},
            {text: "Vacuum tube",correct: false},
            {text: "Chip",correct: false},
            {text: "Integrated Circuit",correct: true},

        ]
    },
    {
        question:"Who among the following has designed the Erlang programming language?",
        answers: [
            {text: "Larry Wall",correct: false},
            {text: "Joe Armstrong",correct: true},
            {text: "Guido van Rossum",correct: false},
            {text: "Yukihiro Matsumoto",correct: false},

        ]
    },
    {
        question:"Who among the following has designed the JavaScript programming language?",
        answers: [
            {text: "Brendan Eich",correct: true},
            {text: "James Gosling",correct: false},
            {text: "Guido van Rossum",correct: false},
            {text: "Rasmus Lerdrof",correct: false},

        ]
    },
    {
        question:"Which among the following is the shortcut key to open a new window?",
        answers: [
            {text: "Shift+N",correct: false},
            {text: "Alt+N",correct: false},
            {text: "Ctrl+N",correct: true},
            {text: "Alt+F5",correct: false},
        
        ]
    },
    {
        question: "Which among the following connects two more networks?",
        answers: [
            {text: "Bus",correct: false},
            {text: "Gateway",correct: true},
            {text: "HTTP",correct: false},
            {text: "Highway",correct: false},

        ]
    },
    {
        question:"Which one is the first fully supported 64-bit operating system?",
        answers: [
            {text: "Windows Vista",correct: false},
            {text: "Linux",correct: true},
            {text: "Mac",correct: false},
            {text: "Windows XP",correct: false},

        ]
    },
    {
        question:"Computer Hard Disk was first introduced in 1956 by-",
        answers: [
            {text: "Dell",correct: false},
            {text: "Apple",correct: false},
            {text: "Microsoft",correct: false},
            {text: "IBM",correct: true},

        ]
    },
    {
        question:"Which one of the followings is a programming language?",
        answers: [
            {text: "HTTP",correct: false},
            {text: "HTML",correct: true},
            {text: "HPML",correct: false},
            {text: "FTP",correct: false},

        ]
    },
    {
        question:"Which computer program converts assembly language to machine language?",
        answers:[
            {text: "Interpreter",correct: false},
            {text: "Compiler",correct: false},
            {text: "Comparator",correct: false},
            {text: "Assembler",correct: true},

        ]
    },
    {
        question:"A computer use which type of number system to calculate and to store data?",
        answers: [
            {text: "Decimal",correct: false},
            {text: "Octal",correct: false},
            {text: "Hexadecimal",correct: false},
            {text: "Binary",correct: true},

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score= 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo +". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => { const button = document.createElement("button");button.innerHTML = answer.text; button.classList.add("btn"); answerButtons.appendChild(button);if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    
    button.addEventListener("click", selectAnswer);
});
}

function  resetState(){
    nextButton.style.display= "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=> {
         if(button.dataset.correct === "true") {
            button.classList.add("correct");
    }
    button.disabled = true;
    })
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML=`you Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
});

startQuiz();