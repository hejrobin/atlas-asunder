import { StateContext } from 'data/state';

export enum ActionType {
	SET_INVENTORY_VISIBLE = 'inventoryVisible',
}

export type Action = {
	type: ActionType.SET_INVENTORY_VISIBLE;
	payload: StateContext;
};

export const reducer = (state: StateContext, action: Action) => {
	const mutateState = (state, nextState) => ({
		...state,
		...nextState,
	});

	switch (action.type) {
		case ActionType.SET_INVENTORY_VISIBLE:
			return mutateState(state, action.payload);
		default:
			throw new Error(`Invalid action '${action.type}'.`);
	}
};

export const asAction = (type: ActionType, payload: any) => ({
	type,
	payload: {
		[type]: payload,
	},
});
