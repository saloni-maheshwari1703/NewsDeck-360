const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "HYperText Transfer Product",
        b: "HYperText Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
arr = [];


function loadQuestion(){
    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}



loadQuestion();


const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsEle) =>{
        if(curAnsEle.checked){
            answer = curAnsEle.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsEle) => curAnsEle.checked = false);
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    arr.push([checkedAnswer,quizDB[questionCount].ans]);
    localStorage.setItem('itemsJson',JSON.stringify(arr));

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    }

    deselectAll();

    questionCount++;
    if(questionCount < quizDB.length){
        loadQuestion(); 
    }
    else{
        showScore.innerHTML = `
           <h3> You Scored ${score}/${quizDB.length} ✌️ </h3>
           <button class = 'btn' onclick = "location.href = 'quiz.html'" location.target = '_self'> See Answers </button>
        `;
        showScore.classList.remove('ScoreArea');
    }
});

