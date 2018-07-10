import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './NavBar';
import SignUpContainer from './SignUpContainer';
import Home from './Home';
import Vr from './Vr';



class App extends React.Component{
  constructor(){
    super()
    // set state with stuff i thought was useful
    this.state ={
      auth: {
        currentUser: {}
      },
      currentCard: {},
      cards:[]
    }
  }

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token) {
      this.getAuth(token)
    }

    this.getCards()
  }

  getCards = () => {
    fetch('http://localhost:3000/api/v1/cards')
    .then(resp => resp.json())
    .then(cards => this.setState({ cards }))
  }

  getAuth = (token) => {
    const options =   {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token
      }
    }
    fetch('http://localhost:3000/api/v1/reauth', options)
    .then(resp => resp.json())
    .then(user => {
      this.setState({
        auth: {
          currentUser: user
        }
      })
    })
  }

  handleLogin = (user) => {
    this.setState({
        auth: {
          currentUser: user
        }
      }, () => {
        localStorage.setItem('token', user.id)
      })
  }

  handleLogout = () => {
    this.setState({
      auth: {
        currentUser: {}
      }
    })
    localStorage.clear()
  }

  handleImgClick = (e) => {
    const currentCard = this.state.cards.find( card => card.id == e.target.id)
    this.setState({ currentCard })
  }

  render(){
  return (
    <Router>
      <div>
        <Navbar currentUser={this.state.auth.currentUser} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
        <Route exact path="/" render={(props) => <Home {...props} cards={this.state.cards} currentCard={this.state.currentCard} handleImgClick={this.handleImgClick} />} />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/vr" component={Vr} />
      </div>
    </Router>
  )}
};

export default App
