const qestions = [
    {
        question: "Quelle est la capitale de la Côte d'Ivoire  ?",
        choices: ["Yamoussoukro", "Abidjan", "korogho", "Paris"],
        reponse: "Yamoussokro",
    },

    {

        question: 'quelle est la capitale du Maroc ?',
        choices: ['Casablanca', 'Fès', 'Marrackech', 'Rabat'],
        reponse: 'Rabat'
    },
    {
        question: "quelle est la capital du Senegal ?",
        choices: ["Dakar", "Thiès", "Louga", "Kolda"],
        reponse: "Dakar"

    },
    {
        question: "Quelle est la capital du Nigeria ?",
        choices: ["Lagos", "Kano", "Benin City", "Abuja"],
        reponse: "Abuja"
    },
    {
        qestion: "Quelle est la capital de la republique Democratique du Congo ?",
        choices: ['Kinshasa', 'Matadi', 'Goma', 'Kananga'],
        reponse: "Kinshasa",

    },
    {
        question: "quelle est la capital du Cameroun ?",
        choices: ['Yaounde', 'Douala', 'Bamenda', 'Kribi'],
        reponse: 'Yaounde'
    }



];
let choices = 0 ;
let score = 0 ;
const quest = document.getElementById("question") ;
const rep = document.getElementById('reponse');
const buttonsuivant = document.getElementById("suivant");
const buttonRejouer = document.getElementById("rejouer");

function afficherQuestion (){
    const q = questions[choices];
    quest.textContent = q.text;
    rep.innerHTML =  "";
    q.choices.forEach(choices => {
        let button = document.createElement('button');
        button.textContent= choices;
        button.classList.add("suivant")
        button.addEventListener('click' , () => verificationRep(choices));
        choicesContainer.appendChild (button)
        
    });
     buttonsuivant.classList.add('cacher');



}; 
function verification (){
   const reponseCorrect = questions[questions].choices;
   const buton = choicesContainer.qerySelectorAll('buttons');
   buton.forEach( () => {
    buton.disabled = true
     if(joueur === reponseCorrect){
    score++
    score.textContent =  `Score : ${score}`;
     

   }
    button.disabled = true ;
    if(button.textContent ===reponseCorrect ){
        button.style.backgroundColor = 'lightgreen';
    }
    else if (button.textContent === reponseCorrect){
        button.style.backgroundColor =  'lightcoral';
    }

   } )
 

   }
  
 Button.addEventListener('click', () =>{
    question++ ;
    if(question < questions.length){
        afficherQuestion();
    }
    else  {
        afficherScore();
    }
}

);
function scoreFinale () {
     question.textContent = `Quiz terminé ! Votre score final est ${score}/${questions.length}`;
  choicesContainer.innerHTML = '';
  nextButton.classList.add('cacher');
  restartButton.classList.remove('cacher') ;

}
restartButton.addEventListener('click', () => {
  score = 0;
  Question = 0;
  score.textContent = `Score : 0`;
  restartButton.classList.add('cacher');
  afficherQuestion();
});









