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
    console.log(cards);
    this.setState({
      userCardReading: cards
     })
     const options =   {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
           'body': JSON.stringify(cards)
     }
     fetch('http://localhost:3000/api/v1/readings', options)
     // if(this.state.auth.currentUser === {}){
     //   window.alert('you gotta login')
     // }else{
     //   window.alert('nice')
     // }

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
        localStorage.setItem('token', user.jwt)
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
