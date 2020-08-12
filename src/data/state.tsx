import React, { createContext, useContext, useReducer, ReactNode } from 'react';

import { reducer, Action } from 'data/store';

export interface StateContext {
	inventoryVisible: boolean;
}

export interface Store {
	state: StateContext;
	dispatch?: React.Dispatch<Action>;
}

const initialState: StateContext = {
	inventoryVisible: false,
};

const AppContext = createContext<Store>({
	state: initialState,
});

export const useStateStore = () => useContext(AppContext);

interface StateProviderProps {
	children: ReactNode;
}

export const StateProvider = ({ children }: StateProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};
