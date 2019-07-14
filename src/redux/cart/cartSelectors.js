import {createSelector} from "reselect"

const selectCart=state=>state.cart;

export const selectCartItems=createSelector(
    [selectCart],
    (cart)=>cart.cartItems
)


export const selectCartItemsCount=createSelector(
    [selectCartItems],
    cartItems=> cartItems.reduce((acc,cartItem)=>{return acc=acc + cartItem.quantity},0)
)

/////////////////////////////////////////////////////////////////
export const selectCartHidden=createSelector(
    [selectCart],
    cart=>cart.hidden
)

////
export const selectCartItemsPrice=createSelector(
    [selectCartItems],
    cartItems=> cartItems.reduce((acc,cartItem)=>{return acc=acc +cartItem.quantity*cartItem.price},0)
)