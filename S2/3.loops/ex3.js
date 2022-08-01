const placesToTravel = [{id: 5, name: 'Japan'},
                    {id: 11, name: 'Venecia'},
                     {id: 23, name: 'Murcia'}, 
                     {id: 40, name: 'Santander'},
                       {id: 44, name: 'Filipinas'}, 
                          {id: 59, name: 'Madagascar'}]


let places=[]
                          
for (const iterator of placesToTravel) {
    if(iterator.id===11 || iterator.id===40){
        places.push(iterator)
    }
    
}
console.log(placesToTravel)