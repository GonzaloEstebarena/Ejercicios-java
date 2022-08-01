fetch('http://localhost:3000/diary')
    .then(res => res.json())
    .then(entradas => {
      
      pintar(entradasO(entradas));
      
    });

    const entradasO = (entradas) => {
      return entradas.sort((a,b)=> new Date(a.date)-new Date(b.date))
    }
const pintar = (entradasO) => {
  for (const entrada of entradasO) {
    const div$$ = document.createElement("div");
    div$$.innerHTML = `<h3>${entrada.title}</h3><h5>${entrada.date}</h5><p>${entrada.description}</p>`
    const button$$ = document.createElement("button");
    button$$.textContent='X'
    button$$.addEventListener('click',()=> removeEntrada(div$$))
    
    div$$.appendChild(button$$);

    document.body.appendChild(div$$)

  }
};
const removeEntrada=(div$$) =>{
  div$$.remove()
}