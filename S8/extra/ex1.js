 fetch('https://breakingbadapi.com/api/characters')
    .then(data=>data.json())
    .then(personajes =>{
        pintar(personajes)
       
    });


const pintar =(personajes)=>{
for (const personaje of personajes) {

const div$$=document.createElement('div')
div$$.innerHTML=`<h2>${personaje.name}</h2><img src="${personaje.img}">`;

document.body.appendChild(div$$);
}
} 

// se le pondrian clases dentro <h2 class=etc y asi luego scss le damos estilos 