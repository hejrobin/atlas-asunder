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
	assertive: string;
}

export const theyThem: PronounType = {
	subjective: 'they',
	objective: 'them',
	possessive: 'theirs',
	reflexive: 'themselves',
	assertive: 'their',
};

export const sheHer: PronounType = {
	subjective: 'she',
	objective: 'her',
	possessive: 'hers',
	reflexive: 'herself',
	assertive: 'her',
};

export const heHim: PronounType = {
	subjective: 'he',
	objective: 'him',
	possessive: 'his',
	reflexive: 'himself',
	assertive: 'his',
};

interface TraitType {
	perception: number;
	ingenuity: number;
	endurance: number;
}

const Perceptive: TraitType = {
	perception: 1,
	ingenuity: 0,
	endurance: -1,
};

const Inventive: TraitType = {
	perception: 0,
	ingenuity: 1,
	endurance: -1,
};

const Athletic: TraitType = {
	perception: -1,
	ingenuity: 0,
	endurance: 1,
};

const Observant: TraitType = {
	perception: 1,
	ingenuity: -1,
	endurance: 0,
};

const Stubborn: TraitType = {
	perception: -1,
	ingenuity: 1,
	endurance: 0,
};

export const Trait = {
	Perceptive,
	Inventive,
	Athletic,
	Observant,
	Stubborn,
};

type CharacterTraitType =
	| typeof Perceptive
	| typeof Inventive
	| typeof Athletic
	| typeof Observant
	| typeof Stubborn;

interface CharacterType {
	name: string;
	age?: number;
	gender: Gender;
	pronoun: Pronoun;
	biography?: string;
	trait: CharacterTraitType;
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

	get perception(): number {
		return this.data.trait.perception;
	}

	get ingenuity(): number {
		return this.data.trait.ingenuity;
	}

	get endurance(): number {
		return this.data.trait.endurance;
	}
}
