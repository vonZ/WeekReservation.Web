export const InitialState = {
  fromDate: '',
  endDate: '',
  selectedSlot: {},
};

export type State = typeof InitialState;

export type Action =
  | { type: 'fromDate' }
  | { type: 'endDate' }
  | { type: 'selectedSlot' }
  | { type: 'setFromDate'; fromDate: string }
  | { type: 'setEndDate'; endDate: string }
  | { type: 'setSelectedSlot'; selectedSlot: Object };

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

    case 'setSelectedSlot':
      return {
        ...state,
        selectedSlot: action.selectedSlot,
      };

    default:
      return state;
  }
};
