import { StateContext } from 'data/state';

export enum ActionType {
	MAIN_MENU_VISIBLE = 'mainMenuVisible',
	LATEST_CHECKPOINT = 'latestCheckpoint',
}

export type Action =
	| { type: ActionType.MAIN_MENU_VISIBLE; payload: StateContext }
	| { type: ActionType.LATEST_CHECKPOINT; payload: StateContext };

export const reducer = (state: StateContext, action: Action) => {
	const mutateState = (
		state: StateContext,
		nextState: StateContext
	): StateContext => ({
		...state,
		...nextState,
	});

	const actionType = action.type;

	switch (actionType) {
		case ActionType.MAIN_MENU_VISIBLE:
		case ActionType.LATEST_CHECKPOINT:
			return mutateState(state, action.payload);
		default:
			throw new Error(`Invalid action '${action.type}'.`);
	}
};
