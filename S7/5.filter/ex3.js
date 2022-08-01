const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const streamergame= streamers.filter(function(game)
{ return game.gameMorePlayed === 'League of Legends' });

console.log(streamergame)



// if( name.gameMorePlayed ==='League of legends') 
// if( game.name ==='League of legends')