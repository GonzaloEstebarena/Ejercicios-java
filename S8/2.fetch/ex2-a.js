const baseUrl = 'https://api.nationalize.io'

const boton$$ = document.querySelector('button')
const input$$=document.querySelector('input')




const search = () => {
    fetch(baseUrl + '?name=' + input$$.value).then(res => res.json()).then(res =>{
        console.log(res);
    })
}

boton$$.addEventListener("click",search)
