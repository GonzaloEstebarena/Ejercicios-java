apiUrl='http://localhost:3000/characters';

let cuenta=1

function buquedaPersonajes (){
fetch(apiUrl +`?_page=${cuenta}&_limit=5`)
.then(res => res.json())
.then(characters =>{
    pintar(characters)
    cuenta++
})}

const pintar =(characters)=>{
    for (const character of characters) {
        const div$$ = document.createElement('div');
        

        div$$.innerHTML = `
                            <h2> ${character.name}</h2>
                            <img src= '${character.image}'</>`



      document.body.appendChild(div$$)                      
    }
    
}

function pintarBoton(){
    const Button$$=document.createElement('button')
    Button$$.textContent='MORE MORE MORE'
    Button$$.addEventListener('click',()=>buquedaPersonajes())
    
    document.body.appendChild(Button$$)
 
}

pintarBoton ()
