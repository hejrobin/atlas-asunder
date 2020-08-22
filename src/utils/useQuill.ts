import Quill, { Subjects } from 'utils/Quill';

type FormatFunction = (string: string) => string;

export default function useQuill(subjects: Subjects): FormatFunction {
	const quill: Quill = new Quill(subjects);

	return quill.format;
}
