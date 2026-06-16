export const fetchPokemonWithDelay = async (name, ms = 2000) => {

    //Creo la promesa que hace que espere
    const delay = new Promise((resolve) => setTimeout(resolve, ms));

    // Conecto la API
    // Promise.all devuelve un array
    // con los resultados de las promesas en el orden que fueron pasadas
    const [answer] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`), 
        delay]);

        if(!answer.ok) throw new Error("Pokémon no encontrado");

    return await answer.json();
    };