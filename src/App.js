    
import React from 'react';
import './App.css';
import {connect} from "react-redux"
import {setCurrentUser} from "./redux/user/userActions"

import HomePage from "./pages/HomePage/HomePage"
import {Route,Switch,Redirect} from "react-router-dom"
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header"
import Checkout from "./pages/Checkout/Checkout"
import Auth from "./pages/Auth/Auth";
import {auth, createUserProfile} from "./firebase/firebase"
import {selectCurrentUser} from "./redux/user/userSelectors"
import {createStructuredSelector} from "reselect"

  
class App extends React.Component{

  unsubscribeFromAuth=null;

  componentDidMount(){

    const {setCurrentUser}=this.props;

    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfile(userAuth);

        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
          }); 
          }
      else{
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={Shop} />
      <Route exact path="/signin" render={()=>this.props.currentUser ? (<Redirect to="/" />) : (<Auth/>)} />
      <Route exact path="/checkout" component={Checkout}/>
      </Switch>
    </div>
  );
}
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps=(dispatch)=>({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);