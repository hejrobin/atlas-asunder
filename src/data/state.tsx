import React, { createContext, useContext, useReducer, ReactNode } from 'react';

import { reducer, Action, ActionType } from 'data/store';

export interface StateContext {
	inventoryVisible: boolean;
}

export interface Store {
	state: StateContext;
	dispatch?: React.Dispatch<Action>;
	dispatchAction?: (type: ActionType, payload: any) => void;
}

const initialState: StateContext = {
	inventoryVisible: false,
};

const StoreContext = createContext<Store>({
	state: initialState,
});

export const useStateContext = () => useContext(StoreContext);

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
