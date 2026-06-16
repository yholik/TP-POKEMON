// Modulo encargado de buscar los datos del pokemon en la api
export const fetchPokemon = async (name) => {
    
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)

    if(!response.ok) throw new Error("Pokémon no encontrado");

    return await response.json();
}