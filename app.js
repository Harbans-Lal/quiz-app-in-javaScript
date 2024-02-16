let question  = document.getElementById("qes");
let answers = document.querySelector(".answers");
let nextBtn = document.querySelector(".nextBtn");
const questionCollection = [
    {
        question: "What is the capital of Australia?",
        Option:[
            {text: 'Sydney', correct: false},
            {text: 'Canberra', correct: true},
            {text: 'Melbourne', correct: false},
            {text: 'Brisbane', correct: false}
        ]
    },
    {
       question: "Which planet in our solar system has only one moon?",
       Option: [
           {text:'Venus',correct:false},
           {text:'Earth',correct:true},
           {text:'Jupiter',correct:false},
           {text:'Uranus',correct:false}
       ]
        
    },
    {
        question: "What is the chemical symbol for water?",
        Option: [
            {text:'H2O',correct:true},
            {text:'CO2',correct:false},
            {text:'N2',correct:false},
            {text:'O2',correct:false}
        ]        
     },
     {
        question: "Who wrote the play 'Romeo and Juliet'?",
        Option: [
            {text:'William Shakespeare',correct:true},
            {text:'Charles Dickens',correct:false},
            {text:'Jane Austen',correct:false},
            {text:'Leo Tolstoy',correct:false}
        ]        
     }
];
let currentQuesIndex = 0;
let score = 0;
nextBtn.addEventListener("click", () => {
    currentQuesIndex++;
    if (currentQuesIndex < questionCollection.length) {
        showAns();
    } else {
        showResult();
    }
});


function startQuiz(){
    currentQuesIndex = 0;
    score = 0;
    showAns();
}
function showAns(){

   clearPrvious();
    let currentQuest = questionCollection[currentQuesIndex].question;
    let questNo = currentQuesIndex + 1;
    question.innerHTML = questNo + "." + currentQuest;

   questionCollection[currentQuesIndex].Option.forEach((item) =>{
    let buttons = document.createElement('button');
    buttons.classList.add('btn');
    buttons.innerHTML = item.text;
    answers.appendChild(buttons);
    let isTrue = item.correct;


    if (isTrue) {
        buttons.setAttribute('data-correct', 'true'); // Set data-correct attribute for correct buttons
    }

    buttons.addEventListener("click" , (e) =>{
        if(isTrue==true){
            buttons.classList.add("correct");
            score++;
        }else{
            buttons.classList.add("incorrect");
            const correctOption = answers.querySelector('.btn[data-correct="true"]');
            correctOption.classList.add('correct');
        } 
        
        let allBtn = document.querySelectorAll(".btn");
        allBtn.forEach(item =>{
            item.disabled = true;
        })
    })
  
   })
}

function clearPrvious(){
   while(answers.firstChild){
    answers.removeChild(answers.firstChild);
   }
}

function showResult(){
    clearPrvious();
    let total = questionCollection.length;
   question.innerHTML = `Your total score is ${score} out of ${total}`;
}

startQuiz();