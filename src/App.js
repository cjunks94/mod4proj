import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './NavBar';
import SignUpContainer from './SignUpContainer';
import ProfileContainer from './ProfileContainer';
import Home from './Home';
import Vr from './Vr';
import BASEURL from './baseURL'



class App extends React.Component{
  constructor(){
    super()
    // set state with stuff i thought was useful
    this.state ={
      auth: {
        currentUser: {}
      },
      userCardReading:[],
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

  setCurrentReading = (cards) =>{
    // set state as users 3 cards
    console.log('cards:', cards, this.state.auth.currentUser);
    this.setState({
      userCardReading: cards
     })
     const options = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
           'body': JSON.stringify({
             card_ids: cards,
             user_id: this.state.auth.currentUser.id,
             date: Date.now()
           })
     }
     if(this.state.auth.currentUser.id){
       console.log('id:', this.state.auth.currentUser.id);
      fetch(`${BASEURL}/readings`, options)
    }

  }


  getCards = () => {
    fetch(`${BASEURL}/cards`)
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
    fetch(`${BASEURL}/reauth`, options)
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
        localStorage.setItem('token', user.jwt)
        this.homeFunc()
      })
  }

  handleLogout = () => {
    this.setState({
      auth: {
        currentUser: {}
      }
    })
    localStorage.clear()
    this.homeFunc()
  }

  handleImgClick = (e) => {
    const currentCard = this.state.cards.find( card => parseInt(card.id) === parseInt(e.target.id))
    this.setState({ currentCard })
    setTimeout(
      //adjusts document to show user new content
      () => window.scrollTo(0, document.body.scrollHeight),
      100
    )
  }

  homeFunc = () =>{
    document.location.href="/";
  }

  render(){
    const user = this.state.auth.currentUser;

    return (
      <Router>
        <div>
          <Navbar currentUser={this.state.auth.currentUser} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
          <Route exact path="/" render={(props) => <Home {...props} cards={this.state.cards} currentCard={this.state.currentCard} handleImgClick={this.handleImgClick} />} />
          <Route path="/signup" component={SignUpContainer} />
          {user && <Route path={`/${user.username}`} render={(props)=> <ProfileContainer {...props} user={user}/>} />}
          <Route exact path="/vr" render={(props)=> <Vr handleReading={this.setCurrentReading} cards={this.state.cards} test={this.homeFunc}/>} />
        </div>
      </Router>
    )
  }

};

export default App
