function findArrayIndex(array, text) 
{for (let index = 0; index < array.length; index++) 
    {
    const element = array[index];
   
    if(element===text) {
       return index
    } 
}
}
let lista=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
let prueba =findArrayIndex(lista,'Caracol')
console.log(prueba)