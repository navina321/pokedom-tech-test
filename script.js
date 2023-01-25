import pokemon from "./data/pokemon";

const cardContainer = document.querySelector(".card-container");


// function for card container HTML
const makeCard = (pokemonObject) => {
    const cardHTML = 
    `<div class = "card">
        <img class = "card__image" src = ${pokemonObject.sprite} alt = "image of ${pokemonObject.name}">
        <div class = "card__content">
            <h1 class = "card__heading">${pokemonObject.name}</h1>
            <h2 class = "card__content">${pokemonObject.name} (#${pokemonObject.id}) is a ${pokemonObject.types.join(" & ")} type pokemon.</h2>
        </div>
    </div> `;
    
    return cardHTML;
}

