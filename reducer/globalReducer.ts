export const GlobalInitialState = {
  slot: {},
};

export type GlobalState = typeof GlobalInitialState;

export type GlobalAction = { type: 'slot' } | { type: 'setSlot'; slot: any };

export const GlobalReducer = (state: GlobalState, action: GlobalAction) => {
  switch (action.type) {
    case 'setSlot':
      return {
        ...state,
        slot: action.slot,
      };

    default:
      return state;
  }
};
