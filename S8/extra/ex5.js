const gameBoard$$ = document.querySelector('[data-function="gameboard"]');

const input$$ = document.querySelector('[data-function="questions-number"]');
const button$ = document.querySelector('[data-function="start-game"]');

const startGame = () => {
  const resetear = () => {
    gameBoard$$.innerHTML = "";
  };
  resetear();
  busquedaPreguntas();
};

function busquedaPreguntas() {
  fetch("https://opentdb.com/api.php?amount=" + input$$.value)
    .then((res) => res.json())
    .then((preguntas) => {
      pintar(preguntas);
    });
}
let respuesta = [];
let allAnswers = [];

let pintar = (preguntas) => {
  for (let pregunta of preguntas.results) {
    const div$$ = document.createElement("div");
    allAnswers = [...pregunta.incorrect_answers, pregunta.correct_answer];
    div$$.innerHTML = `<h3>${pregunta.question}</h3>`;
    randomAnswers = [];
    gameBoard$$.appendChild(div$$);
    /// function azarAnswer(allAnswers) {
    ///   for (let i = a.length - 1; i > 0; i--) {
    /// /// const j = Math.floor(Math.random() * (i + 1));
    /// /// [a[i], a[j]] = [a[j], a[i]];
    ///   }
    /// return allAnswers;
    ///   }

    // div$$.innerHTML=`<h3>${pregunta.question}</h3><p class="answer" >${ respuesta }</p>`;
    
    for (let i = 0; i < allAnswers.length; i++) {
      respuesta = allAnswers[i];
      const p$$ = document.createElement("p");
      p$$.innerHTML = `<p class="answer" >${respuesta}</p>`;
      p$$.addEventListener('click', (e) => {
        markAnwser(e.target, respuesta);})

      gameBoard$$.appendChild(p$$);
      
    }

    
  }
};



const markAnwser = (target, respuesta) => {
    const allAnwsers = document.body.querySelectorAll("p")
    for (const answer of allAnwsers) {
        answer.classList.remove("marked")
    }
    target.classList.add('marked');
}



button$.addEventListener("click", startGame);


