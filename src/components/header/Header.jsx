import React from "react";
import "./Header.scss";
import { Link ,NavLink} from "react-router-dom";
import { ReactComponent as Logo } from "../assets/4.4 crown.svg.svg";
import {auth} from "../../firebase/firebase"
import {connect} from "react-redux"

const Header = ({currentUser}) => {
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
      </div>
    </div>
  );
};

const mapsStateToProps=(state)=>({
  currentUser:state.user.currentUser
})

export default connect(mapsStateToProps)(Header);
