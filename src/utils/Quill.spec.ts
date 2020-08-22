import '@testing-library/jest-dom/extend-expect';

import Character, { Gender, Pronoun } from 'data/characters/Character';
import Quill from 'utils/Quill';

const player: Character = new Character({
	name: 'Agnes',
	gender: Gender.Female,
	pronoun: Pronoun.SheHer,
});

const partner: Character = new Character({
	name: 'Sam',
	gender: Gender.Neutral,
	pronoun: Pronoun.TheyThem,
});

describe('Quill', () => {
	const q = new Quill({ player, partner });

	it('can format names', () => {
		expect(q.format('Hello %player.name%')).toBe('Hello Agnes');
		expect(q.format('Hello %partner.name%')).toBe('Hello Sam');
	});

	it('can format possesive names', () => {
		expect(q.format('%player.possessiveName%')).toBe('Agnes’');
		expect(q.format('%partner.possessiveName%')).toBe('Sams');
	});

	it('can return correct pronouns', () => {
		expect(q.format('%player.pronoun.subjective%')).toBe('she');
		expect(q.format('%player.pronoun.objective%')).toBe('her');
		expect(q.format('%player.pronoun.possessive%')).toBe('hers');
		expect(q.format('%player.pronoun.reflexive%')).toBe('herself');

		expect(q.format('%partner.pronoun.subjective%')).toBe('they');
		expect(q.format('%partner.pronoun.objective%')).toBe('them');
		expect(q.format('%partner.pronoun.possessive%')).toBe('theirs');
		expect(q.format('%partner.pronoun.reflexive%')).toBe('themselves');
	});

	it('can format a complex template', () => {
		const template =
			'%player.name% sneezes, accidentily hurting %player.pronoun.reflexive%.';

		const formatted = 'Agnes sneezes, accidentily hurting herself.';

		expect(q.format(template)).toBe(formatted);
	});
});
