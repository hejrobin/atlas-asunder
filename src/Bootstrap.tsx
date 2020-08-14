import React, { Fragment } from 'react';

import { useStateStore } from 'data/state';
import { ActionType, asAction } from 'data/store';

import Quickfire from 'views/components/Quickfire';

export default function Bootstrap(): JSX.Element {
	const { state, dispatch } = useStateStore();

	const showInventory = () =>
		dispatch && dispatch(asAction(ActionType.SET_INVENTORY_VISIBLE, true));

	const hideInventory = () =>
		dispatch && dispatch(asAction(ActionType.SET_INVENTORY_VISIBLE, false));

	return (
		<Fragment>
			{state.inventoryVisible ? (
				<Quickfire timeLimit={3} onEnded={hideInventory} />
			) : null}
			<span onClick={showInventory}>Show Inventory</span> -{' '}
			<span onClick={hideInventory}>Hide Inventory</span>
		</Fragment>
	);
}
