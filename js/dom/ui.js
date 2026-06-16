// Modulo encargado de la UI, renderizado y manejo del DOM

// Funcion que renderiza el pokemon en el DOM
export const renderPoke = (data) => {

    //Busco el contenedor voy a volcar la info del pokemon
    const container = document.querySelector("#result");
   

    //innerHTML: limpia lo que haya dentro del contenedor y lo reemplaza
    container.innerHTML = `
    <h2>${data.name.toUpperCase()}</h2>
    <img src="${data.sprites.front_default}" alt="${data.name.toUpperCase()}">    
    `;
};

// Funcion que renderiza un menasje de error en el DOM
export const renderError = (message) => {
    const container = document.querySelector("#result");

    container.innerHTML=`
    <div class="error">⚠️ ${message}</div>
    `;

};

// Funcion que muestra/oculta el loader
export const toggleLoader = (visible) => {
    //Busco el elemento que representa el loader
const loader = document.querySelector("#loader");

// Con classList puedo agregar o quitar clases del elemento
if(visible){
loader.classList.remove("hidden");
}else{
    loader.classList.add("hidden");
}
};

// Funcion que limpia el resultado del DOM
export const clearResult = () => {
    const container = document.querySelector("#result");
    container.innerHTML = "";    
};