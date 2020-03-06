import { createContext, useContext, useReducer, Dispatch, ComponentType } from 'react';
import { Action, InitialState, SearchReducer, State } from '../reducer/common';

const stateCtx = createContext(InitialState);
const dispatchCtx = createContext((() => 0) as Dispatch<Action>);

export const Provider: ComponentType = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, InitialState);
  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};

export const useDispatch = () => useContext(dispatchCtx);

export const useGlobalState = <K extends keyof State>(property: K) => {
  const state = useContext(stateCtx);
  return state[property]; // only one depth selector for comparison
};
