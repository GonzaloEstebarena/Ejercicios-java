

fetch("https://api.agify.io?name=michael")
    .then(function(res){
    return res.json();

})
    .then (function(data){
    console.log(data);
    printData(data);
})
