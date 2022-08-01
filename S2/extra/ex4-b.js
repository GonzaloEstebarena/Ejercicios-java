function findArrayIndex(array, text) 
{for (let index = 0; index < array.length; index++) 
    {
    const element = array[index];
   
    if(element===text) {
       return index
    } 
}
}

function removeItem(array,text){
    let index=findArrayIndex(array,text);
        array.splice(index,1)
        return array;

    }
   
let lista=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
let prueba =removeItem(lista,'Salamandra')
console.log(prueba)