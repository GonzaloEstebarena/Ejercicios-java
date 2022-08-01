const userAnwsers = [];

const confirmValue = confirm('Soy un texto');
const promptValue = prompt('Soy un texto');

function confirmExample(description){
   return confirm(description)
}

function promptExample(description){
    return prompt(description)
}

function father(description,callback){
    userAnwsers.push(callback(description))

}

father('aaaaaaaH',confirmExample)
father('bbbbbbbbbbbbbb',promptExample)
console.log(userAnwsers)