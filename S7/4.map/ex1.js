const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

var result = users.map(function (user, index, array) {
 
    return user.name; 
 
});
console.log(result)
