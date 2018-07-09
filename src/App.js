import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './NavBar';
import SignUp from './SignUp';
import Home from './Home';
import Vr from './Vr';



class App extends React.Component{
  constructor(){
    super()
    // set state with stuff i thought was useful
    this.state ={
      currentCard:'',
      currentser:'',
      allCards:[],
    }
  }

  homeFunc = () =>{
    console.log('helooooo');
    document.location.href="/";
  }

  render(){
  return (
    <Router>
      <div>
      <Navbar />
        <Route exact path="/" render={()=> <Home test={this.homeFunc}/>} />
        <Route exact path="/signup" render={()=> <SignUp test={this.homeFunc}/>} />
      <Route exact path="/vr" render={()=> <Vr test={this.homeFunc}/>} />

      </div>
    </Router>
  )}
};

export default App
