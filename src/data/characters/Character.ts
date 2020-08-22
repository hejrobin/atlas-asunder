export enum Gender {
	Neutral,
	Female,
	Male,
}

export enum Pronoun {
	TheyThem,
	SheHer,
	HeHim,
}

interface PronounType {
	subjective: string;
	objective: string;
	possessive: string;
	reflexive: string;
}

export const theyThem: PronounType = {
	subjective: 'they',
	objective: 'them',
	possessive: 'theirs',
	reflexive: 'themselves',
};

export const sheHer: PronounType = {
	subjective: 'she',
	objective: 'her',
	possessive: 'hers',
	reflexive: 'herself',
};

export const heHim: PronounType = {
	subjective: 'he',
	objective: 'him',
	possessive: 'his',
	reflexive: 'himself',
};

interface CharacterType {
	name: string;
	age?: number;
	gender: Gender;
	pronoun: Pronoun;
	biography?: string;
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
		return this.data.biography ?? '';
	}

	get gender(): Gender {
		return this.data.gender;
	}

	getPronouns(): PronounType {
		switch (this.data.pronoun) {
			case Pronoun.TheyThem:
				return theyThem;
			case Pronoun.SheHer:
				return sheHer;
			case Pronoun.HeHim:
				return heHim;
		}
	}
}
