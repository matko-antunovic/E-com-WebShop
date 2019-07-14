import React from 'react'
import "./Checkout.scss"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCartItems,selectCartItemsPrice} from "../../redux/cart/cartSelectors"
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem"


const Checkout = ({cartItems,total}) => {
    return (
        <div className="checkout">
            <div className="checkout-header">
                <div className="header-block">
                <span>Product</span>
                </div>
                <div className="header-block">
                <span>Description</span>
                </div>
                <div className="header-block">
                <span>Quantity</span>
                </div>
                <div className="header-block">
                <span>Price</span>
                </div>
                <div className="header-block">
                <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem=>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
                <div className="total"><span>TOTAL: ${total}</span></div>
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartItemsPrice
})

export default connect(mapStateToProps)(Checkout)
