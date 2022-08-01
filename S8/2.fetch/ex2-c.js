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
    
    let text=`El nombre'${persona.name} tiene`;
    for (const pais of persona.country) {
        const porcentaje =Math.floor(pais.probability*100);
       
        text +=`un ${porcentaje} porciento de ser de ${pais.country_id}`;
    }
     
    const div$$=document.createElement('div');
    const p$$=document.createElement('p');
    const boton$$=document.createElement('button')

    p$$.textContent=text;
    boton$$.innerHTML='X';

    div$$.appendChild(p$$);
    div$$.appendChild(boton$$);

     boton$$.addEventListener('click',()=>{removeB(div$$)})
     document.body.appendChild(div$$);
    
  }

  const removeB=(lastNode$$)=>{
    lastNode$$.remove();
  }
  const boton$$ = document.querySelector('button');
  boton$$.addEventListener("click",search);


