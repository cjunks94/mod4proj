import React from 'react';
import TarotImg from './components/TarotImg'
import Card from './components/Card'

const Home = (props) => {
  return (
    <div className="page">
      <section className="page-body">
        <h2>Welcome to TarotVR!</h2>
        <p>Select one of the following options:</p>
        <ul>
          <li>VR: Experience our 3D immersive Tarot Card Reading for yourself</li>
          <li>Sign Up: Create a profile to save your Tarot Card Readings</li>
          <li>Login: Access your profile page to view your previous readings</li>
        </ul>
      </section>
      <section className="page-images">
        <h4>Select A Card For More Information</h4>
        <div className="scrolling-wrapper">
          {props.cards.length > 0 ? props.cards.map( card => <TarotImg key={card.id} card={card} handleClick={props.handleImgClick}/>) : null }
        </div>
      </section>
      <section className="page-body">
        <div className="show-card">
          {props.currentCard.id ? < Card card={props.currentCard} /> : null }
        </div>
      </section>
    </div>
  );
};

export default Home;
