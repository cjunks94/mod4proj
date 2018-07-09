import React from 'react';
// import { Entity, Scene } from 'aframe-react'
import 'aframe'
import 'aframe-extras'


const Vr = (props) => {

  return (
    <a-scene new-scene>
      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
              <a-box id="a-box" position="-2 3 -3" rotation="0 0 0" material="src: exit.png" depth=".001" height=".5" width=".75" onClick={props.test}></a-box>

{/* box material will be changed to "src: 'our tarot img url'" */}
      <a-box id="a-box" position="0 1.8 -3" rotation="0 0 0" material="color: aqua" depth=".001" height="3" width="2" onClick={props.test}></a-box>





      {/* <a-entity position="0 2 -3" rotation="0 0 0" geometry="primitive: box" material="src: #my-texture"></a-entity> */}


    <a-sky material="src: space.png"></a-sky>
    <a-ocean
      color="black"
      depth="100"
      width="100"
      opacity="1"
      amplitude=".5"
      sound="src: url(sea.mp3); autoplay: true; loop: true; volume: .75"></a-ocean>

    </a-scene>
  );
};

export default Vr;
