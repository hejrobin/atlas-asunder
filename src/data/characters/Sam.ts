import Character, { Gender, Pronoun, Trait } from 'data/characters/Character';

const character: Character = new Character({
	name: 'Sam',
	age: 27,
	gender: Gender.Neutral,
	pronoun: Pronoun.TheyThem,
	trait: Trait.Inventive,
});

export default character;
