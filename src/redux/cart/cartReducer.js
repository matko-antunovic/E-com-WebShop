import { CartActionTypes } from "./cartActionTypes";
import { addItemToCart,decreaseQuantity } from "./cartUtils";


const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CartActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems:decreaseQuantity(state.cartItems,action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
