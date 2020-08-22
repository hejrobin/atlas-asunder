import Character, { Gender, Pronoun } from 'data/characters/Character';

const character: Character = new Character({
	name: 'Agnes',
	age: 26,
	gender: Gender.Female,
	pronoun: Pronoun.SheHer,
});

export default character;
