interface CharacterType {
	name: string;
	age?: number;

	biography: string;
}

export default class Character {
	constructor(protected data: CharacterType) {}

	get name(): string {
		return this.data.name;
	}

	get age(): number | string {
		return this.data.age ?? 'Unknown';
	}

	get biography(): string {
		return this.data.biography;
	}
}
