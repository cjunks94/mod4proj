import React from 'react';
import './App.css';
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
  render(){
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/vr" component={Vr} />
      </div>
    </Router>
  )}
};

export default App
