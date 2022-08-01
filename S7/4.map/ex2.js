const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];


 var result = users.map(function (user, index, array) {
    if( user.name.startsWith('A')===true){
        user.name='Anacleto';
 }
 return user.name; 
}
);
console.log(result)

//for (let i = 0; i < result.length; i++) {
   // const element = result[i];
//    if(element.startsWith('A')===true){
//        element='Anacleto';
//       
   // }
    
// }


