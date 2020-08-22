import Character, { Gender, Pronoun } from 'data/characters/Character';

const character: Character = new Character({
	name: 'Sam',
	age: 27,
	gender: Gender.Neutral,
	pronoun: Pronoun.TheyThem,
});

export default character;
