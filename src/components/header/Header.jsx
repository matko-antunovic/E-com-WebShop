import React from "react";
import CartIcon from "../Cart/CartIcon"
import CartDropdown from "../CartDropdown/CartDropdown"
import { ReactComponent as Logo } from "../assets/4.4 crown.svg.svg";
import {auth} from "../../firebase/firebase"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCartHidden} from "../../redux/cart/cartSelectors"
import {selectCurrentUser} from "../../redux/user/userSelectors"
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from "./HeaderStyles"

const Header = ({currentUser,hidden}) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
        
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        {currentUser ? 
        <OptionLink as="div" onClick={()=> auth.signOut()}>
        SIGN OUT
         </OptionLink>
      :
        <OptionLink to="/signin">SIGN IN</OptionLink>
        }
        <CartIcon/>
      </OptionsContainer>
      { !hidden ? <CartDropdown /> : null}
      
    </HeaderContainer>
  );
};

const mapsStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})

export default connect(mapsStateToProps)(Header);
