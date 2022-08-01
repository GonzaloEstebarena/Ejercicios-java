const aliens = [{name: 'Zalamero', planet: 'Eden', age: 4029},{name: 'Paktu', planet: 'Andromeda', age: 32},{name: 'Cucushumushu', planet: 'Marte', age: 503021}];

const mutations = [{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];


const alien =aliens.find (function(element)
{if (element.name ==='Cucushumushu') {return element}})

const mutator =mutations.find (function(element)
{if (element.name ==='Porompompero') {return element}})

let aliem = {...alien,mutation:{...mutator}}

console.log(aliem)