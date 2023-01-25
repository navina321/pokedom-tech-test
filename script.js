import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

// function for card container HTML


const makeCard = (pokemonObject) => {
    
    //const x = ${pokemonObject.name.charAt(0).toUpperCase()} + ${pokemonObject.name.slice}
    const capitalPokemon = pokemonObject.name.charAt(0).toUpperCase() + pokemonObject.name.slice(1);

    const cardHTML = 
    `<div class = "card">
        <img class = "card__image" src = ${pokemonObject.sprite} alt = "image of ${pokemonObject.name}">
        <div class = "card__content">
            <h1 class = "card__heading">${capitalPokemon}</h1>
            <h2 class = "card__text">${capitalPokemon} (#${pokemonObject.id}) is a ${pokemonObject.types.join(" & ")} type pokemon.</h2>
        </div>
    </div> `;
    
    return cardHTML;
}

const populatePage =  () => {
    for (let i = 0; i < pokemonArray.length; i++) {
        cardContainer.innerHTML += makeCard (pokemonArray[i]);
    }
};

// const populatePage = (pokemonArr) => {
//     cardContainer.innerHTML = pokemonArr.map(pokemon => makeCard(character)).join("")

// }



populatePage(pokemonArray);
