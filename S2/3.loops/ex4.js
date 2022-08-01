const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]

let ergato=[];

for (const iterator of toys) {
    if (iterator.name.includes('gato')){
        ergato.push(iterator)
    }
    
}
console.log(ergato)
