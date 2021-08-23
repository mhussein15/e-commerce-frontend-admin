const initialState = {
  orders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "UPDATE_ORDER":
      const index = state.orders.findIndex(
        (order) => order.id === action.payload.updatedOrder.id
      );
      const newState = [...state.orders];
      if (index !== -1) {
        newState[index] = action.payload.updatedOrder;
      }
      return {
        ...state,
        orders: [...newState],
      };

    default:
      return state;
  }
};

export default reducer;
