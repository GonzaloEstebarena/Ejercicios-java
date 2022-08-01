const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
let cat=[]

for (const iterator of movies) {
    for (const iterator2 of iterator.categories) {
     if(!cat.includes(iterator2)){
            cat.push(iterator2)
        }
    } 
    }
console.log(cat)