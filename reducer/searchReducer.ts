export const SearchInitialState = {
  fromDate: '',
  toDate: '',
  selectedSlot: {},
};

export type SearchState = typeof SearchInitialState;

export type SearchAction =
  | { type: 'fromDate' }
  | { type: 'toDate' }
  | { type: 'selectedSlot' }
  | { type: 'setFromDate'; fromDate: string }
  | { type: 'setToDate'; toDate: string }
  | { type: 'setSelectedSlot'; selectedSlot: any };

export const SearchReducer = (state: SearchState, action: SearchAction) => {
  switch (action.type) {
    case 'setFromDate':
      return {
        ...state,
        fromDate: action.fromDate,
      };

    case 'setToDate':
      return {
        ...state,
        toDate: action.toDate,
      };

    case 'setSelectedSlot':
      return {
        ...state,
        selectedSlot: action.selectedSlot,
      };

    default:
      return state;
  }
};
