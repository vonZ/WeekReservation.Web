export const InitialState = {
  fromDate: '',
  endDate: '',
};

export type State = typeof InitialState;

export type Action =
  | { type: 'fromDate' }
  | { type: 'endDate' }
  | { type: 'setFromDate'; fromDate: string }
  | { type: 'setEndDate'; endDate: string };

export const SearchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setFromDate':
      return {
        ...state,
        fromDate: action.fromDate,
      };

    case 'setEndDate':
      return {
        ...state,
        endDate: action.endDate,
      };

    default:
      return state;
  }
};
