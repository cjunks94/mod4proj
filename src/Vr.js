import React from 'react';
// import { Entity, Scene } from 'aframe-react'
import 'aframe'
import 'aframe-extras'
import 'aframe-particle-system-component'



class Vr extends React.Component{
createCard = () =>{
  // const scene = document.getElementsByTagName('a-scene')[0]
  // const newBox =`<a-box id="new-card"position="0 1.8 -3" rotation="0 0 0" material=" color: aqua" depth=".001" height="3" width="2" shader="flat" onClick={this.props.test}></a-box>`
  // scene.insertAdjacentHTML( 'beforeend', newBox)

}
testFunc = (e) =>{
  console.log(e.target.nextElementSibling)
  e.target.nextElementSibling.emit('start')
}

render(){
  return (
    <a-scene new-scene>
      <a-camera position="0 2 .75">
        <a-cursor></a-cursor>
    </a-camera>

    <a-assets>
      <a-mixin id="floats"
        attribute="position"
        direction="alternate"
        dur="3000"
        repeat="indefinite">
      </a-mixin>
    </a-assets>

    <a-box position="-4 3 -3"
      rotation="0 30 0"
      material="src: exit.png"
      depth=".001"
      height=".5"
      width=".75"
      shader="flat"
      onClick={this.props.test}>
      <a-animation mixin="floats"
        delay="500"
        from="-4 3 -3"
        to="-4 2.7 -3">
        </a-animation>
      </a-box>

          <a-entity id="deck"
            rotation= "0 90 15"
            position="0 .3 -3"
            onClick={this.createCard}>>
            <a-animation mixin="floats"
              from="0 .826 -3"
              to="0 .5 -3">
              </a-animation>

            <a-plane id="front"
              position="-0.5 0 0"
              width="2"
              height=".5"
              rotation="0 -90 0"
              src="lines.png"
              shader="flat">
              </a-plane>
            <a-plane id="top"
              position="0 .25 0"
              height="2"
              rotation="-90 0 0"
              src="persona.png"
              shader="flat">
              </a-plane>
          </a-entity>

            <a-box id="card-1"
              position="-3 3.4 -4.5"
              rotation="0 10 0"
              width="2"
              height="3"
              depth=".1"
              src="persona.png"
              shader="flat"
              visible="true">
              <a-animation mixin="floats"
                delay="300"
                from="-3 3.4 -4.5"
                to="-3 3.2 -4.5">
                </a-animation>
              </a-box>
            <a-box id="card-2"
              position="3 3.4 -4.5"
              rotation="0 -10 0"
              width="2"
              height="3"
              depth=".1"
              src="persona.png"
              shader="flat"
              visible="true"
              onClick={this.testFunc}>
              <a-animation mixin="floats"
                delay="700"
                end="start"
                from="3 3.1 -4.5"
                to="3 3.4 -4.5">
                </a-animation>
                <a-animation
                  attribute="position"
                  begin="start"
                  from="3 3.1 -4.5"
                  to="100 100 100">
                  </a-animation>
              </a-box>

            <a-box id="card-3"
              position="0 3.4 -4.8"
              rotation="0 0 0"
              width="2"
              height="3"
              depth=".1"
              src="persona.png"
              shader="flat"
              visible="true">
              <a-animation mixin="floats"
                dur="2000"
                delay="700"
                from="0 3.2 -4.5"
                to="0 3.5 -4.5">
                </a-animation>
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
    <a-sky material="src: space.png" radius="2000" opacity=".75">
      <a-animation attribute="rotation"
             dur="100000"
             fill="forwards"
             from="0 0 360"
             to="0 0 0"
             repeat="indefinite"></a-animation>
    </a-sky>


    <a-entity particle-system="preset:dust;particleCount:10000;color:blue"></a-entity>


    </a-scene>
  )}
};

export default Vr;
