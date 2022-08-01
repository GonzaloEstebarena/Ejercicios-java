const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const button$$=document.querySelector('[data-function="toFilterStreamers"]')

function handleStreamers (event) {
    
    const streamer= streamers.filter(function(game)
    {if (game.name.includes('button$$.value')){
    console.log(streamer)
}
}
)
}

    button$$.addEventListener('button', handleStreamers)