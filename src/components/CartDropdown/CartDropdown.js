import React from 'react'
import {CartContainerStyles,EmptyStyles,CartItemsStyles} from "./CartDropdownStyles"
import CustomButton from "../Button/CustomButton"
import CartItem from "../CartItem/CartItem"
import {connect} from "react-redux"
import {selectCartItems} from "../../redux/cart/cartSelectors"
import {createStructuredSelector} from "reselect"
import {withRouter} from "react-router-dom"
import {toggleCartHidden} from "../../redux/cart/cartActions"


const CartDropdown = ({cartItems,history, dispatch}) => (
        <CartContainerStyles>
            <CartItemsStyles>
                {
                    cartItems.length ?
                    cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                        :<EmptyStyles> Your cart is empty</EmptyStyles>
            }
            </CartItemsStyles>
            <CustomButton onClick={()=>{
                dispatch(toggleCartHidden())
                history.push("/checkout")}
            }>GO TO CHECKOUT</CustomButton>
        </CartContainerStyles>
)

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
