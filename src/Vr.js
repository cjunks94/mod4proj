import React from 'react';
// import { Entity, Scene } from 'aframe-react'
import 'aframe'
import 'aframe-extras'


class Vr extends React.Component{
createCard = () =>{
  const scene = document.getElementsByTagName('a-scene')[0]

  const newBox ='<a-box id="new-card"position="0 1.8 -3" rotation="0 0 0" material=" color: aqua" depth=".001" height="3" width="2"></a-box>'
  scene.insertAdjacentHTML( 'beforeend', newBox)
  scene.removeChild(document.getElementById('card-deck'))


}

removeDeck = () =>{
  document.getElementsByTagName('a-scene')[0]
  .removeChild(document.getElementById('card-deck'))
}


render(){
  return (
  <div>


    <a-scene new-scene>
      <a-camera>
        <a-cursor></a-cursor>
    </a-camera>

    <a-box position="-2 3 -3" rotation="0 0 0" material="src: exit.png" depth=".001" height=".5" width=".75" onClick={this.props.test}></a-box>

  <a-box id="card-deck" position="0 1.8 -3" color="green" onClick={this.createCard}></a-box>
  {/* {this.createBox()} */}

{/* box material will be changed to "src: 'our tarot img url'" */}

      <a-entity light="type: point; intensity: 5" position="0 0 0"></a-entity>


      <a-entity id="rain" particle-system="preset: rain; color: #24CAFF; particleCount: 5000"></a-entity>

    <a-sky material="src: space.png"></a-sky>
    <a-ocean
      color="purple"
      depth="50"
      width="50"
      density="20"
      opacity=".9"
      amplitude=".5"
      sound="src: url(sea.mp3); autoplay: true; loop: true; volume: .75"></a-ocean>

    </a-scene>
    </div>
  )}
};

export default Vr;
