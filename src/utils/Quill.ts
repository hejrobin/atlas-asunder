/**
 *	Quill is a custom dialog template "language" for Atlas Asunder.
 */

import Character from 'data/characters/Character';

export interface Subjects {
	player: Character;
	partner: Character;
}

interface Definition {
	[property: string]: (subjects: Subjects, target: string) => string;
}

const Template: Definition = {
	name: (subjects: Subjects, target: string) => subjects[target].name as string,

	possessiveName: (subjects: Subjects, target: string) => {
		let name: string = subjects[target].name;

		if (name.endsWith('s')) {
			name += '’';
		} else {
			name += 's';
		}

		return name;
	},

	'pronoun.subjective': (subjects: Subjects, target: string) =>
		subjects[target].getPronouns().subjective as string,

	'pronoun.objective': (subjects: Subjects, target: string) =>
		subjects[target].getPronouns().objective as string,

	'pronoun.possessive': (subjects: Subjects, target: string) =>
		subjects[target].getPronouns().possessive as string,

	'pronoun.reflexive': (subjects: Subjects, target: string) =>
		subjects[target].getPronouns().reflexive as string,
};

export default class Quill {
	public constructor(protected subjects: Subjects) {}

	public format(string: string): string {
		const pattern = /%([^%]+)?%/g;

		const formatter = (fullMatch: string, variable: string) => {
			const variableParts = variable.split('.');
			const target = variableParts[0];

			variable = variable.replace(`${target}.`, '');

			if (!Template[variable]) {
				throw new TypeError(`Unkown Quill tag: ${fullMatch}`);
			}

			return Template[variable](this.subjects, target);
		};

		return string.replace(pattern, formatter);
	}
}
