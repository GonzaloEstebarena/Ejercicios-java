const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];


var result = cities.map(function (city, index, array) {
    if( city.isVisited===true){
        city.name=city.name+' Visitado';
 }
 return city.name; 
}
);
console.log(result)