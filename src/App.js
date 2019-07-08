import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage/HomePage"
import {Route,Switch} from "react-router-dom"
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header"
import Auth from "./pages/Auth/Auth";
import {auth} from "./firebase/firebase"


class App extends React.Component{


  state={
    currentUser:null
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
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
      <Route path="/signIn" component={Auth}/>
      </Switch>
    </div>
  );
}
}

export default App;
