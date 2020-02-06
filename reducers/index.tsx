type State = {
  theme: string | null;
};

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: action.newTheme,
      };

    default:
      return state;
  }
};

export default reducer;
