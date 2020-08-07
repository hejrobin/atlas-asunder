import { useEffect } from 'react';

interface KeyboardBindingOptions {
	onArrowUp?: () => void;
	onArrowDown?: () => void;
	onArrowLeft?: () => void;
	onArrowRight?: () => void;
	onSpacebar?: () => void;
	onBackspace?: () => void;
	onDelete?: () => void;
	onEnter?: () => void;
	onTab?: () => void;
	onEscape?: () => void;
	keyBindings?: { [key: string]: () => void };
}

export default function useKeyBindings(bindings: KeyboardBindingOptions) {
	useEffect(() => {
		const observe = (event: any) => {
			if (event.defaultPrevented) return;
			if (event.target === window && event.target !== document.body) return;

			const {
				onArrowUp,
				onArrowDown,
				onArrowLeft,
				onArrowRight,
				onSpacebar,
				onBackspace,
				onDelete,
				onEnter,
				onTab,
				onEscape,
				keyBindings,
			} = bindings;

			let didEmit = false;

			const keyString = event.key.toString();
			const keyHandler = keyBindings && keyBindings[keyString];

			switch (event.key) {
				case 'Up':
				case 'ArrowUp':
					if (onArrowUp instanceof Function) {
						onArrowUp(event);
						didEmit = true;
					}
					break;

				case 'Down':
				case 'ArrowDown':
					if (onArrowDown instanceof Function) {
						onArrowDown(event);
						didEmit = true;
					}
					break;

				case 'Left':
				case 'ArrowLeft':
					if (onArrowLeft instanceof Function) {
						onArrowLeft(event);
						didEmit = true;
					}
					break;

				case 'Right':
				case 'ArrowRight':
					if (onArrowRight instanceof Function) {
						onArrowRight(event);
						didEmit = true;
					}
					break;

				case ' ':
				case 'Spacebar':
					if (onSpacebar instanceof Function) {
						onSpacebar(event);
						didEmit = true;
					}
					break;

				case 'Backspace':
					if (onBackspace instanceof Function) {
						onBackspace(event);
						didEmit = true;
					}
					break;

				case 'Delete':
					if (onDelete instanceof Function) {
						onDelete(event);
						didEmit = true;
					}
					break;

				case 'Enter':
					if (onEnter instanceof Function) {
						onEnter(event);
						didEmit = true;
					}
					break;

				case 'Tab':
					if (onTab instanceof Function) {
						onTab(event);
						didEmit = true;
					}
					break;

				case 'Escape':
					if (onEscape instanceof Function) {
						onEscape(event);
						didEmit = true;
					}
					break;
			}

			if (!didEmit && typeof keyHandler === 'function') {
				keyHandler();
			}

			event.preventDefault();
		};

		window.addEventListener('keyup', observe, false);

		return () => window.removeEventListener('keyup', observe);
	});
}
