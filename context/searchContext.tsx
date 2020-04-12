import { createContext, useContext, useReducer, Dispatch, ComponentType } from 'react';
import { SearchAction, SearchInitialState, SearchReducer, SearchState } from '../reducer/searchReducer';

const stateCtx = createContext(SearchInitialState);
const dispatchCtx = createContext((() => 0) as Dispatch<SearchAction>);

export const SearchProvider: ComponentType = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, SearchInitialState);
  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};

export const useDispatch = () => useContext(dispatchCtx);

export const useGlobalState = <K extends keyof SearchState>(property: K) => {
  const state = useContext(stateCtx);
  return state[property]; // only one depth selector for comparison
};
