export default class Pokemon {
  constructor(pokemon) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.hp = pokemon.stats[0].base_stat;
    this.attack = pokemon.stats[1].base_stat;
    this.defence = pokemon.stats[2].base_stat;
    this.specialAttack = pokemon.stats[3].base_stat;
    this.specialDefence = pokemon.stats[4].base_stat;
    this.speed = pokemon.stats[5].base_stat;
  }

  get pokemonName() {
    return this.name;
  }

  set pokemonData(pokemon) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.hp = pokemon.stats[0].base_stat;
    this.attack = pokemon.stats[1].base_stat;
    this.defence = pokemon.stats[2].base_stat;
    this.specialAttack = pokemon.stats[3].base_stat;
    this.specialDefence = pokemon.stats[4].base_stat;
    this.speed = pokemon.stats[5].base_stat;
  }

  get pokemonData() {
    return {
      id: this.id,
      name: this.name,
      hp: this.hp,
      attack: this.attack,
      defence: this.defence,
      specialAttack: this.specialAttack,
      specialDefence: this.specialDefence,
      speed: this.speed,
    };
  }
}
