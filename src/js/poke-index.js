import pokemonCardTpl from '../templates/poke-card.hbs';
import '../../css/style.css';
import Pokemon from '../js/pokemonClass';
// const Handlebars = require('handlebars');
// const markup = Handlebars.compile(pokemonCardTpl);

const refs = {
  pokemonList: document.querySelector('.poke-list'),
};
const API_URL = 'https://pokeapi.co/api/v2';
const RANDOM_ID_1 = Math.round(Math.random() * (500 - 1) + 1);
const RANDOM_ID_2 = Math.round(Math.random() * (600 - 1) + 1);

function pokemonList(start, end) {
  for (let id = start; id <= end; id += 1) {
    fetchPokemonById(id)
      .then(pokemonMarkUp)
      .catch(e => {
        console.log(e);
      });
  }
}

function fetchPokemonById(id) {
  return fetch(API_URL + `/pokemon/${id}`).then(response => {
    return response.json();
  });
}

function pokemonMarkUp(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.pokemonList.insertAdjacentHTML('beforeEnd', markup);

  //   console.log(`${pokemon.id} - ${pokemon.name} --- INFO: `, pokemon);
}

// function setPokemonData(instanse, pokemon) {
//   instanse.pokemonData({
//     name: pokemon.name,
//     hp: pokemon.stats[0].base_stat,
//     attack: pokemon.stats[1].base_stat,
//     defence: pokemon.stats[2].base_stat,
//     specialAttack: pokemon.stats[3].base_stat,
//     specialDefence: pokemon.stats[4].base_stat,
//     speed: pokemon.stats[5].base_stat,
//   });
// }
// const pok1 = new Pokemon();
// console.log(pok1);

// fetchPokemonById(RANDOM_ID)
//   .then(renderPokemon)
//   .then(val => console.log(val));

function renderPokemon(pokemon) {
  return new Pokemon(pokemon);
}

function createPokemon(id) {
  return fetchPokemonById(id).then(renderPokemon);
}

function battle(rivals) {
  console.log(rivals[0]);
  console.log(rivals[1]);
  const pokemon1 = strengthCalc(rivals[0], rivals[1]);
  const pokemon2 = strengthCalc(rivals[1], rivals[0]);
  console.log(`Покемон ${rivals[0].name.toUpperCase()} силой в ${pokemon1}`);
  console.log(`Покемон ${rivals[1].name.toUpperCase()} силой в ${pokemon2}`);

  if (pokemon1 > pokemon2) {
    console.log(
      `Покемон ${rivals[0].name.toUpperCase()} победил покемона ${rivals[1].name.toUpperCase()}`
    );
    return;
  } else if (pokemon2 > pokemon1) {
    console.log(
      `Покемон ${rivals[1].name.toUpperCase()} победил покемона ${rivals[0].name.toUpperCase()}`
    );
    return;
  } else {
    console.log(`Ничья!`);
  }
}

function strengthCalc(p1, p2) {
  return p1.hp + p1.defence - p2.attack;
}

Promise.all([createPokemon(RANDOM_ID_1), createPokemon(RANDOM_ID_2)]).then(
  battle
);

// fetchPokemonById(100).then(pokemon => {
//   pok1.pokemonData = {
//     name: pokemon.name,
//     hp: pokemon.stats[0].base_stat,
//     attack: pokemon.stats[1].base_stat,
//     defence: pokemon.stats[2].base_stat,
//     specialAttack: pokemon.stats[3].base_stat,
//     specialDefence: pokemon.stats[4].base_stat,
//     speed: pokemon.stats[5].base_stat,
//   };
// });

// console.log(pok1.name);
//   console.log({
//     name: pokemon.name,
//     hp: pokemon.stats[0].base_stat,
//     attack: pokemon.stats[1].base_stat,
//     defence: pokemon.stats[2].base_stat,
//     specialAttack: pokemon.stats[3].base_stat,
//     specialDefence: pokemon.stats[4].base_stat,
//     speed: pokemon.stats[5].base_stat,
//   });
// });

// function PL(pokemon) {
//   console.log(`${pokemon.id} - ${pokemon.name} --- INFO: `, pokemon);
// }

// pokemonList(1, 2);

// const pokemonId_1 = new Pokemon(2);
// pokemonId_1.fetchPokemonById();
// console.log(pokemonId_1.pokemonData);

// console.error('error');
