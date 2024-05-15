import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');
/* (Pokemon.prototype as any).customName = 'Pikachu'; */

charmander.publicApi = 'https://portafoliodenoel.netlify.com';
console.log(charmander)