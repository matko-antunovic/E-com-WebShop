import React from "react";
import "./Header.scss";
import CartIcon from "../Cart/CartIcon"
import CartDropdown from "../CartDropdown/CartDropdown"
import { Link ,NavLink} from "react-router-dom";
import { ReactComponent as Logo } from "../assets/4.4 crown.svg.svg";
import {auth} from "../../firebase/firebase"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCartHidden} from "../../redux/cart/cartSelectors"
import {selectCurrentUser} from "../../redux/user/userSelectors"

const Header = ({currentUser,hidden}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <NavLink activeClassName="active" className="option" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="option" to="/contact">
          CONTACT
        </NavLink>
        {currentUser ? 
        <div className="option" onClick={()=> auth.signOut()}>
        SIGN OUT
         </div>
      :
        <NavLink className="option" to="/signin">SIGN IN</NavLink>
        }
        <CartIcon/>
      </div>
      { !hidden ? <CartDropdown /> : null}
      
    </div>
  );
};

const mapsStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})

export default connect(mapsStateToProps)(Header);
