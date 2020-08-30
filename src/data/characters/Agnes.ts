import Character, { Gender, Pronoun, Trait } from 'data/characters/Character';

const character: Character = new Character({
	name: 'Agnes',
	age: 26,
	gender: Gender.Female,
	pronoun: Pronoun.SheHer,
	trait: Trait.Observant,
});

export default character;
