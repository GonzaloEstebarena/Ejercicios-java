const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


const streamer= streamers.filter(function(game)
{if (game.gameMorePlayed.includes('Legends')){return game}
})
for (let index = 0; index < streamer.length; index++) {
    const element = streamer[index];
    if (element.age > 35) { 
       
        element.gameMorePlayed=element.gameMorePlayed.toUpperCase()
        
    }
    
}
console.log(streamer)
