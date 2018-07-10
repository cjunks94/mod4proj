import React from 'react';
// import { Entity, Scene } from 'aframe-react'
import 'aframe'
import 'aframe-extras'
import 'aframe-particle-system-component'



class Vr extends React.Component{
createCard = () =>{
  const scene = document.getElementsByTagName('a-scene')[0]

  const newBox =`<a-box id="new-card"position="0 1.8 -3" rotation="0 0 0" material=" color: aqua" depth=".001" height="3" width="2" shader="flat" onClick={this.props.test}></a-box>`
  scene.insertAdjacentHTML( 'beforeend', newBox)
  scene.removeChild(document.getElementById('card-deck'))


}

removeDeck = () =>{
  document.getElementsByTagName('a-scene')[0]
  .removeChild(document.getElementById('card-deck'))
}


render(){
  return (
    <a-scene new-scene>
      <a-camera>
        <a-cursor></a-cursor>
    </a-camera>

    <a-box position="-2 3 -3"
      rotation="0 0 0"
      material="src: exit.png"
      depth=".001"
      height=".5"
      width=".75"
      shader="flat"
      onClick={this.props.test}></a-box>



  <a-box id="card-deck"
    position="0 .826 -3"
    color="brown"
    depth="2"
    height="1"
    width="3"
    shader="flat"
    onClick={this.createCard}>
      <a-animation attribute="position" direction="alternate" dur="3000" from="0 .826 -3" to="0 .5 -3" repeat="indefinite"></a-animation>
    </a-box>

    {/* box material will be changed to "src: 'our tarot img url'" */}

      <a-entity light="type: point; intensity: 3" position="0 3.5 3.5"></a-entity>

    <a-sky material="src: space.png" radius="3000">
      <a-animation attribute="rotation"
             dur="100000"
             fill="forwards"
             to="0 0 360"
             repeat="indefinite"></a-animation>
    </a-sky>
    {/* <a-sky material="color: purple" opacity=".5" radius="2000"></a-sky> */}


<a-entity particle-system="preset:dust;particleCount:10000;color:purple"></a-entity>


    </a-scene>
  )}
};

export default Vr;
