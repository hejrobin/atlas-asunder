import useKeyBindings from 'utils/useKeyBindings';

export default function KeyBindings() {
	useKeyBindings({
		onEscape: () => {
			console.log('useKeyBindings');
		},
	});

	return null;
}
