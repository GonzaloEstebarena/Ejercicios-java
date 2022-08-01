const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];



for (let index = 0; index < countries.length; index++) {
    const country = countries[index];
    const div$$= document.createElement('div');
    div$$.innerHTML=`<h4>${country.name}</h4> <img src="${country.imgUrl}"/>`;
   document.body.appendChild(div$$);
 
    const p$$=document.createElement('p');
    const boton$$=document.createElement('button')

    p$$.textContent=text;
 

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