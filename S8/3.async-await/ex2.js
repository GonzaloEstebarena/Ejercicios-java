async function getCharacters() {
    
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const personajes =  await res.json();
    console.log(personajes)

    }
    
    getCharacters();