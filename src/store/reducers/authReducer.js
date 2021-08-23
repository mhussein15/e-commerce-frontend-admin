const initialState = {
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_INFO":
      return {
        ...state,
        user: null,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
