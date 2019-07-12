import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage/HomePage"
import {Route,Switch} from "react-router-dom"
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header"
import Auth from "./pages/Auth/Auth";
import {auth, createUserProfile} from "./firebase/firebase"


class App extends React.Component{


  state={
    currentUser:null
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfile(userAuth);

        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          });
          console.log(this.state)
          })
      }else{
        this.setState({
          currentUser:userAuth
        })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={Shop} />
      <Route path="/signin" component={Auth}/>
      </Switch>
    </div>
  );
}
}

export default App;
