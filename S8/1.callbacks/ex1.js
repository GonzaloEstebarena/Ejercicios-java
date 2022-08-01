const numbersList = [];

function sum(a,b){
    return a+b

}

function substract(a,b){
return a-b
}

function father(a,b,callback){
 
    numbersList.push(callback(a,b));
    

}

father(5,10,sum)
console.log(numbersList)