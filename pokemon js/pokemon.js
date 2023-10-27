class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky() {
        return Math.random() < this.luck;
    }

    attackPokemon(target) {
        if (this.isLucky()) {
            const damage = this.attack - target.defense;
            if (damage > 0) {
                target.hp -= damage;
                return damage;
            }
            return 0;
        } else {
            return 0;
        }
    }
}

const pokemonA = new Pokemon("PokemonA", 30, 20, 100, 0.8);
const pokemonB = new Pokemon("PokemonB", 25, 18, 110, 0.75);

while (pokemonA.hp > 0 && pokemonB.hp > 0) {
    const damageToB = pokemonA.attackPokemon(pokemonB);
    console.log(`${pokemonA.name} attaque ${pokemonB.name} et inflige ${damageToB} dégâts.`);
    console.log(`${pokemonB.name} a maintenant ${pokemonB.hp} HP.`);

    if (pokemonB.hp <= 0) {
        console.log(`${pokemonB.name} est mort. ${pokemonA.name} est le gagnant!`);
        break;
    }

    const damageToA = pokemonB.attackPokemon(pokemonA);
    console.log(`${pokemonB.name} attaque ${pokemonA.name} et inflige ${damageToA} dégâts.`);
    console.log(`${pokemonA.name} a maintenant ${pokemonA.hp} HP.`);

    if (pokemonA.hp <= 0) {
        console.log(`${pokemonA.name} est mort. ${pokemonB.name} est le gagnant!`);
        break;
    }
}
