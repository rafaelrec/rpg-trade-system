import fetch from "node-fetch";

let pokemons = fetch('http://localhost:3000/pokemon')
.then((pokemons) => {
console.log(pokemons)
return pokemons})
.then((error) => console.log(error));



console.log("List all pokemons", pokemons )
const pokeNames = pokemons.filter((pokemons) => {pokemons.name})

console.log(pokeNames);