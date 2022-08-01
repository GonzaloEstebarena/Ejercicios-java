const baseUrl = 'https://api.nationalize.io'


const input$$=document.querySelector('input')




const search = () => {
    const input$$=document.querySelector('input');

    fetch(baseUrl + '?name=' + input$$.value)
    .then(datos => datos.json())
    .then(persona =>{
        nacionalidades(persona);
    }
    )
}
  const nacionalidades=(persona)=>{
    const p$$=document.createElement('p');
    let text=`El nombre'${persona.name} tiene`;
    for (const pais of persona.country) {
        const porcentaje =Math.floor(pais.probability*100);
       
        text +=`un ${porcentaje} porciento de ser de ${pais.country_id}`;


    }
    p$$.textContent=text;
    document.body.appendChild(p$$);
  }
  const boton$$ = document.querySelector('button');
  boton$$.addEventListener("click",search);

//const p$$=document.createElement('p');
   // p$$.textContent('El nombre'+ data.name+' tiene un'+data.gender+ )
//boton$$.addEventListener("click",search)
