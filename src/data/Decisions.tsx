import React, {
	useMemo,
	useReducer,
	createContext,
	useContext,
	ReactNode,
} from 'react';

interface DecisionState {
	character?: number | null;
}

export enum DecisionAction {
	RESET = 'reset',
	CHARACTER = 'character',
}

export type Action =
	| { type: DecisionAction.RESET; payload: DecisionState }
	| { type: DecisionAction.CHARACTER; payload: DecisionState };

interface DecisionStateDispatch {
	state: DecisionState;
	dispatch?: React.Dispatch<Action>;
	emit?: (type: DecisionAction, payload: any) => void;
}

const initialState: DecisionState = {
	character: null,
};

const DecisionContext = createContext<DecisionStateDispatch>({
	state: initialState,
});

export const useDecisionState = () => {
	const { state, dispatch, emit } = useContext(DecisionContext);

	return { ...state, dispatch, emit };
};

interface StateProviderProps {
	children: ReactNode;
}

const reducer = (state: DecisionState, action: Action) => {
	const mutateState = (
		state: DecisionState,
		nextState: DecisionState
	): DecisionState => ({
		...state,
		...nextState,
	});

	const actionType = action.type;

	switch (actionType) {
		case DecisionAction.RESET:
			return { ...initialState };
		case DecisionAction.CHARACTER:
			return mutateState(state, action.payload);
		default:
			throw new Error(`Invalid action '${actionType}'.`);
	}
};

const DecisionStateProvider = ({ children }: StateProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const emit = (type: DecisionAction, payload: any) =>
		dispatch({
			type,
			payload: {
				[type]: payload,
			},
		});

	const store: DecisionStateDispatch = useMemo(
		() => ({
			state,
			dispatch,
			emit,
		}),
		[state, dispatch, emit]
	);

	return (
		<DecisionContext.Provider value={store}>
			{children}
		</DecisionContext.Provider>
	);
};

export default DecisionStateProvider;
