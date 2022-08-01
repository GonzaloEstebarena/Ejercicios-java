// pintar planetas y meter evento click en las imagenges para que haga un fetch a los personajes .
// hay que poner el 
const planets$$ = document.querySelector('[data-function="planets"]');
const search$$ = document.querySelector('[data-function="search"]');
const characters$$ = document.querySelector('[data-function="characters"]');

fetch('http://localhost:3000/planets')
    .then(res => res.json())
    .then(planetas => {

        pintar(planetas)
    })

let pintar =(planetas)=>{
    for (const planeta of planetas) {

        const div$$ = document.createElement("div");
        div$$.innerHTML = `<h3>${planeta.name}</h3><img height=100px widht = 100% src='${planeta.image}'>`
        
        div$$.addEventListener('click', () => getCharactersFilteredByPlanet(planeta.id));

       planets$$.appendChild(div$$)
        
    }
        
    }


// 1 busca los personajes y recoge las funciones para pintar y busqueda 1+2+4

    let actualCharacters = [];
function getCharactersFilteredByPlanet(idPlanet){
        search$$.innerHTML = '';
        characters$$.innerHTML = '';
        fetch('http://localhost:3000/characters?idPlanet='+ idPlanet).then(res => res.json()).then(characters => {
            actualCharacters = characters;
            createSearch()
            printCharacters(characters)
        })
    }
// 2 funcion que crea el botn de buscar con el evento para filtrar personajes =2+3
    function createSearch(){
    const input$$ = document.createElement("input");
    const button$$ = document.createElement("button");
    button$$.textContent = "Buscar";


    button$$.addEventListener("click", () => filterCharacters(input$$.value))
    search$$.appendChild(input$$)
    search$$.appendChild(button$$)
}


///3 la funcion de busqueda y poder filtrar aplicada en 2
function filterCharacters(searchValue){
    const filteredCharacters = actualCharacters.filter((actualCharacter) => actualCharacter.name.toLowerCase() === searchValue.toLowerCase())
    characters$$.innerHTML = '';

    printCharacters(filteredCharacters);
    
}
// 4recorre el array para pintar los personajes en un div en concreto segun el fetch del 1 

function printCharacters (characters) {
    for (const character of characters) {
        const character$$ = document.createElement('div');

        character$$.innerHTML = `
            <img height="200" src="${character.avatar}"/>
            <h2>${character.name}</h2>
        `
        characters$$.appendChild(character$$)
    }
}




///img$$.addEventListener('click',()=>(repintar(personajes))
///
///fetch('http://localhost:3000/characters')
///.then(res=>res.json())
///.then(personajes=>{
//////repintar(personajes)
///})


