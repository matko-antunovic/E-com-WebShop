import React from 'react'
import "./CartDropdown.scss"
import CustomButton from "../Button/CustomButton"
import CartItem from "../CartItem/CartItem"
import {connect} from "react-redux"
import {selectCartItems} from "../../redux/cart/cartSelectors"
import {createStructuredSelector} from "reselect"
import {withRouter} from "react-router-dom"
import {toggleCartHidden} from "../../redux/cart/cartActions"

const CartDropdown = ({cartItems,history, dispatch}) => (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                        :<span className="empty"> Your cart is empty</span>
            }
            </div>
            <CustomButton onClick={()=>{
                dispatch(toggleCartHidden())
                history.push("/checkout")}
            }>GO TO CHECKOUT</CustomButton>
        </div>
)

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
