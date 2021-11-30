/*const ques = document.querySelector('.question');
const opt1 = document.querySelector('#option1');
const opt2 = document.querySelector('#option2');
const opt3 = document.querySelector('#option3');
const opt4 = document.querySelector('#option4');
//const submit = document.querySelector('#submit');
//const answers = document.querySelectorAll('.answer');
//const showScore = document.querySelector('#showScore');

const li1 = document.getElementById('li-1');
const li2 = document.getElementById('li-2');
const li3 = document.getElementById('li-3');
const li4 = document.getElementById('li-4');
arrStr = localStorage.getItem("itemsJson");
arr = JSON.parse(arrStr);

var i = -1;

tellAnswer();

function loadQuestion(){
   // console.log(i);
    const questionList = quizDB[i];

    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

function findWhich_liMarked(){
    var result;
    if(arr[i][0] == 'ans1'){
        result = li1;
    }
    else if(arr[i][0] == 'ans2'){
        result = li2;
    }
    else if(arr[i][0] == 'ans3'){
        result = li3;
    }
    else if(arr[i][0]== 'ans4'){
        result = li4;
    }
    else{
        result = null;
    }
    return result;
}

function findWhich_liCorrect(){
    var result;
    if(arr[i][1] == 'ans1'){
        result = li1;
    }
    else if(arr[i][1] == 'ans2'){
        result = li2;
    }
    else if(arr[i][1] == 'ans3'){
        result = li3;
    }
    else if(arr[i][1] == 'ans4'){
        result = li4;
    }
    else{
        result = null;
    }
    return result;
}

function tellAnswer(){
    i++;
    if(i<arr.length){
        loadQuestion();
        var marked = findWhich_liMarked();
        var correct = findWhich_liCorrect();
        if(marked == correct){
            console.log(5);
            marked.style.color = "green";
        }
        else if(marked != correct && marked!=null){
            marked.style.color = "red";
            correct.style.color = "green";
        }
        else{
            correct.style.color = "green";
        }
    }
    else{
        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length} ✌️ </h3>
            <button class = 'btn' onclick = "location.href = 'answer.html'" location.target = '_self'> See Answers </button>
            `;
        showScore.classList.remove('ScoreArea');
    }
}*/
