import React, {
	useMemo,
	useReducer,
	createContext,
	useContext,
	ReactNode,
} from 'react';

interface AppState {
	currentTime?: number;
}

export enum AppAction {
	RESET = 'reset',
	MAIN_MENU_VISIBLE = 'mainMenuVisible',
}

export type Action =
	| { type: AppAction.RESET; payload: AppState }
	| { type: AppAction.MAIN_MENU_VISIBLE; payload: AppState };

interface AppStateDispatch {
	state: AppState;
	dispatch?: React.Dispatch<Action>;
	emit?: (type: AppAction, payload: any) => void;
}

const initialState: AppState = {
	currentTime: 0,
};

const AppContext = createContext<AppStateDispatch>({
	state: initialState,
});

export const useAppState = () => {
	const { state, dispatch, emit } = useContext(AppContext);

	return { ...state, dispatch, emit };
};

interface StateProviderProps {
	children: ReactNode;
}

const reducer = (state: AppState, action: Action) => {
	const mutateState = (state: AppState, nextState: AppState): AppState => ({
		...state,
		...nextState,
	});

	const actionType = action.type;

	switch (actionType) {
		case AppAction.RESET:
			return { ...initialState };
		case AppAction.MAIN_MENU_VISIBLE:
			return mutateState(state, action.payload);
		default:
			throw new Error(`Invalid action '${actionType}'.`);
	}
};

const AppStateProvider = ({ children }: StateProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const emit = (type: AppAction, payload: any) =>
		dispatch({
			type,
			payload: {
				[type]: payload,
			},
		});

	const store: AppStateDispatch = useMemo(
		() => ({
			state,
			dispatch,
			emit,
		}),
		[state, dispatch, emit]
	);

	return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export default AppStateProvider;
