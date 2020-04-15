import { createContext, useContext, useReducer, Dispatch, ComponentType } from 'react';
import { GlobalAction, GlobalInitialState, GlobalReducer, GlobalState } from '../reducer/globalReducer';

const stateCtx = createContext(GlobalInitialState);
const dispatchCtx = createContext((() => 0) as Dispatch<GlobalAction>);

export const GlobalProvider: ComponentType = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, GlobalInitialState);
  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};

export const useDispatch = () => useContext(dispatchCtx);

export const useGlobalState = <K extends keyof GlobalState>(property: K) => {
  const state = useContext(stateCtx);
  return state[property]; // only one depth selector for comparison
};
