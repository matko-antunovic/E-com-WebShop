import React from 'react'
import {connect} from "react-redux"
import { toggleCartHidden } from "../../redux/cart/cartActions"
import {ReactComponent as ShoppingIcon} from "../assets/11.2 shopping-bag.svg.svg"
import {selectCartItemsCount} from "../../redux/cart/cartSelectors"
import {createStructuredSelector} from "reselect"
import {ItemCountStyles,ShoppingIconStyles,CartIconStyles} from "./CartIconStyles"


const CartIcon = ({toggleCartHidden, itemCount}) => {
    
    return (
        <CartIconStyles onClick={toggleCartHidden}>
            {/* <ShoppingIcon  className="shopping-icon"/> */}
            <ShoppingIconStyles><ShoppingIcon/></ShoppingIconStyles>
            <ItemCountStyles>{itemCount}</ItemCountStyles>
        </CartIconStyles>
    )
}
const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps=createStructuredSelector({
    itemCount:selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
