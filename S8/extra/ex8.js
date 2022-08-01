fetch ('https://ghibliapi.herokuapp.com/films')
.then (data=>data.json())
.then(peliculas =>{
    pintar(peliculas)
   
});

const pintar =(peliculas)=>{
    for (const pelicula of peliculas) {
    
    const div$$=document.createElement('div')
    div$$.innerHTML=`<h2>${pelicula.title}</h2><img src="${pelicula.image}">`;
    
    document.body.appendChild(div$$);
    }
    } 