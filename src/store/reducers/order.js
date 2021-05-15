import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      //merge orderdata and id from actions to one object
      const newOrder = {
        ...action.OrderData,
        id: action.orderId,
      };
      return {
        ...state,
        loading: false,
        //concat create new array and immuitiballt

        orders: state.orders.concat(newOrder),
      };
    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
