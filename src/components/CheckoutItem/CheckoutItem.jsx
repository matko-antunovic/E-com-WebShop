import React from 'react'
import "./CheckoutItem.scss"
import {removeItem,decreaseQuantity,addItem} from "../../redux/cart/cartActions"
import {connect} from "react-redux"

const CheckoutItem = ({cartItem,removeItem,decreaseQuantity,addItem}) => {
    const{name,quantity,price,imageUrl}=cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow" onClick={()=>decreaseQuantity(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>removeItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    removeItem: item=>dispatch(removeItem(item)),
    addItem:item=>dispatch(addItem(item)),
    decreaseQuantity:item=>dispatch(decreaseQuantity(item))
})


export default connect(null,mapDispatchToProps)(CheckoutItem)