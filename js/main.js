// Importo la función de la API con delay artificial para simular 
// tiempos de carga más largos
import { fetchPokemonWithDelay } from "./api/pokemon_delay.js";

//Importo las funciones de la UI
import { toggleLoader, renderError, renderPoke, clearResult } from "./dom/ui.js";

// Seleccion el boton para agregarle el evento de click
const btnSearch = document.querySelector("#btnSearch");

// Selecciono el input para obtener su valor al hacer la búsqueda
const inputSearch = document.querySelector("#search");

// Agrego el evento de click al botón
btnSearch.addEventListener("click", async () => {
    clearResult(); // Cada vez que hace click limpia el resultado anterior

    console.log("Buscando Pokémon..."); // Para ver por consola que se hizo click

    // Creo la query a partir del valor del input, y le aplico .trim()
    // para eliminar espacios al principio o al final.
    const query = inputSearch.value.trim();

    if (!query) {
        //Muestro un alert y corto la ejecución de la función con 'return'
        //para evitar hacer la petición a la API.
        window.alert("La búsqueda no puede estar vacía.");
        return;
    }

    //ToogleLoader ON 
    toggleLoader(true);

    try {
        const data = await fetchPokemonWithDelay(query, 2000);
        renderPoke(data);
        inputSearch.value = "";

        // Programo un timeout para limpiar el resultado después de 5 segundos
        setTimeout(() => { clearResult(); }, 5000);

    } catch (error) {
        renderError(error.message);
        setTimeout(() => { clearResult(); }, 5000);

    } finally {

        //ToogleLoader OFF
        toggleLoader(false);
    }

});