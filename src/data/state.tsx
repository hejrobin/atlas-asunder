import React, { createContext, useReducer, ReactNode } from 'react';

import { reducer, Action, ActionType } from 'data/store';

export interface StateContext {
	mainMenuVisible?: boolean;
	latestCheckpoint?: string;
}

const initialState: StateContext = {
	mainMenuVisible: false,
	latestCheckpoint: 'main',
};

export interface Store {
	state: StateContext;
	dispatch?: React.Dispatch<Action>;
	dispatchAction?: (type: ActionType, payload: any) => void;
}

export const StoreContext = createContext<Store>({
	state: initialState,
});

interface StateProviderProps {
	children: ReactNode;
}

export const StateProvider = ({ children }: StateProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const dispatchAction = (type: ActionType, payload: any) =>
		dispatch({
			type,
			payload: {
				[type]: payload,
			},
		});

	const store: Store = { state, dispatch, dispatchAction };

	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};
