import React from 'react';
// import { Entity, Scene } from 'aframe-react'
import 'aframe'
import 'aframe-extras'


const Vr = (props) => {
  return (
    <a-scene new-scene>
{/* box material will be changed to "src: 'our tarot img url'" */}
      <a-box id="a-box" position="0 1.8 -3" rotation="0 0 0" material="color: aqua" height="3" width="2"></a-box>



      {/* <a-entity position="0 2 -3" rotation="0 0 0" geometry="primitive: box" material="src: #my-texture"></a-entity> */}


    <a-sky material="color:red"></a-sky>
    <a-ocean color="black" depth="100" width="100" opacity="1" amplitude=".5"></a-ocean>

    </a-scene>
  );
};

export default Vr;
