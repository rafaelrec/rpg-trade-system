
//Isso é uma função
async function getPokemonList() {

    let pokemons = await fetch('http://localhost:3000/pokemon')
        .then((response) =>
            response.json()
        )
        .then(data => {
            return data;
        })
        .catch((error) => console.log("Error", error));

    return pokemons
}

// Função main executar como a principal do programa
(async function main() {

    // Usando a função
    // AWAIT é usado para realizar uma espera, 
    // essa função vai pegar informações e precisa 
    // esperar o retorno da requisição
    const pokemonsList = await getPokemonList();

    console.log("List all pokemons", pokemonsList)
    const pokeNames = pokemonsList.map((pokemons) => { return pokemons.name })

    console.log("Pokemon names", pokeNames);

})();