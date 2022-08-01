let player1;
let player2;
const characters$$ = document.querySelector("[data-function='characters']")

fetch('http://localhost:3000/characters')
.then(data=>data.json())
.then(personajes =>{console.log (personajes) ;
    pintar(personajes)

})

const pintar =(personajes)=>{

    for (let i = 0; i < personajes.length; i++) {
        const personaje = personajes[i];
        const div$$=document.createElement('div')
        const btnDelete$$=document.createElement('button')
        btnDelete$$.textContent='Eliminar'

        div$$.innerHTML=`<h2>${personaje.name}</h2><img src='${personaje.avatar}' /> `
        

        // evento con funcion anonima para que se ejcute deletechar y introducimos la vairable que queremos borrar .
        btnDelete$$.addEventListener('click',()=>deleteCharacters(personaje)) 
        div$$.addEventListener("click", () => { seleccionarJ(personaje) })

     // characters$$.appendChild(btnDelete$$)
      characters$$.appendChild(div$$)

    }
}

const form$$=document.querySelector('form')
form$$.addEventListener('submit',getData)

function getData(event){

    event.preventDefault(); 
        // transformar en objetos los datos del imput del form
    const data = Object.fromEntries(new FormData(form$$).entries())
    // transformar datos en 
        // numero
    data.defense=Number(data.defense)
    data.critic=Number(data.critic)
    data.vitality=Number(data.vitality)
    //  en array ( ya que se usan tiradas de dados)
    data.damage=data.damage.split(',')
   
    console.log(data)
// enviamos los personajes al json
    fetch('http://localhost:3000/characters', {
     method: 'POST',
     headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
     },
     body: JSON.stringify(data)
    }).then(res => res.json())
        .then(res => console.log(res));


     // hacemos la funcion para eliminar los personajes de l jsn
}
function deleteCharacters(character){
fetch('http://localhost:3000/characters/'+ character.id, {
    method: 'DELETE',
    
   }).then(res => res.json())
       .then(res => console.log(res));
    }

// BATALLA 
// seleccion de personaje 
    function seleccionarJ (personaje){
        if(player1){
            player2=personaje;
            readyForNextBattle();
        } else {

            player1=personaje
        }


    }
// Boton iniciar batalla 

function readyForNextBattle () {
    const buttonF$$=document.createElement('button');
    buttonF$$.innerText='¡¡LUCHAD MALDITOS!!';
    buttonF$$.addEventListener('click',batalla)
    characters$$.appendChild(buttonF$$)
}

// quien inicia la batalla 

function batalla () {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber === 1) {
        round(player1, player2);
    } else {
        round(player2, player1);
    }
}
// pelea ataque y rondas hasta la muerte 

function round(playerFighting, playerDefending) {
    let roundDamage = 0;
    for (const dice of playerFighting.damage) {
        roundDamage += rollADice(dice, playerFighting.critic);
    }
    finalDamage(roundDamage, playerDefending);

    if (playerDefending.vitality > 0) {
        setTimeout(() => { round(playerDefending, playerFighting) }, 250);
    }
    console.log(playerFighting.name + " pegando");
    console.log(playerDefending.name + " vida: " + playerDefending.vitality);
}




// daño final - armadura y resultado final vit 
function finalDamage(damage, playerDefending) {
    const finalDamage = damage - playerDefending.defense;
    playerDefending.vitality -= finalDamage;
}
// Calculo de daño por tirada de dados 
function rollADice(dice, critic) {
    const indexOfD = dice.indexOf("d");
    const timesToRoll = dice.substring(0, indexOfD);
    const sides = dice.substring(indexOfD + 1, dice.length);
    let diceDamage = 0;

    for (let index = 0; index < timesToRoll; index++) {
        rollingDamage = Math.floor(Math.random() * Number(sides)) + 1;
        diceDamage += rollingDamage === critic ? rollingDamage * 2 : rollingDamage;
    }

    return diceDamage;
}
