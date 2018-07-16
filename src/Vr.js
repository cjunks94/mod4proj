import React from 'react';
import 'aframe'
import 'aframe-extras'
import 'aframe-particle-system-component'
import {Entity} from 'aframe-react'



class Vr extends React.Component{
  constructor(){
    super()
     this.cardArr =[]
  }
  componentDidMount(){
    document.querySelector('#deck').addEventListener("click", this.zoom)
  }
  sendEm = () =>{
    this.props.handleReading(this.cardArr)
  }
  incOpac = (e) =>{
    e.target.setAttribute("text", "opacity", "1")
    e.target.setAttribute("material", "visible", "true")
    e.target.setAttribute("material", "color", "#030303")

  }
  decOpac = (e) =>{
    e.target.setAttribute("text", "opacity", ".25")
    e.target.setAttribute("material", "visible", "false")

  }

  spinHelper = (e) =>{
    let randomCard = Math.floor(Math.random() * 21)
    console.log("index",randomCard);

    let index = parseInt(e.target.id.charAt(5)) //which card is it?
    console.log("array",this.cardArr);
    if(this.cardArr.includes(randomCard)){
      this.spin(e)
    }else {
      this.cardArr.splice(index-1, 0, this.props.cards[randomCard].id)
      //insert at correct index(card 1 at 0, 2 at 1 etc)
      if(e.target.querySelector('.face')){
        e.target.querySelector('.face').setAttribute("src", this.props.cards[randomCard].image_url)
        //grab nested and set it?
        e.target.querySelector('.text').setAttribute("text", "value", this.props.cards[randomCard].meaning)
        e.target.querySelector('.text').setAttribute("visible","true")
      }
    }
  }

  // --REMOVED SHOW FINISHED BUTTON, READING IS NOW SAVED INSTEAD
  // showFinishedButton =()=>{
  //   document.querySelector('#submit-sign').emit('done')
  // }

  spin  = (e) =>{
    e.target.emit('wee')
    e.target.removeEventListener("click", this.spin)
    e.target.querySelector('.text').addEventListener("mouseenter", this.incOpac)
    e.target.querySelector('.text').addEventListener("mouseleave", this.decOpac)
    this.spinHelper(e)
    if(this.cardArr.length === 3){
      // --REPLACED WITH SEND EM TO CREATE READING ON 3RD DRAWN CARD
      // this.showFinishedButton()
      this.sendEm()
    }
}
zoom = (e) =>{

  e.target.parentElement.removeEventListener("click", this.zoom)
  //maybe do querySelectorAll and emit and add listeners
  const card2 = document.querySelector('#card-2')
  const card1 = document.querySelector('#card-1')
  const card3 = document.querySelector('#card-3')
  card1.addEventListener("click", this.spin)
  card2.addEventListener("click", this.spin)
  card3.addEventListener("click", this.spin)
  e.target.emit('stop')
  card2.emit('start')
  card1.emit('start')
  card3.emit('start')
}

render(){
  return (
    <a-scene new-scene>
      <a-camera position="0 2 .75" wasd-controls="enabled:false">
        <a-cursor color="yellow"></a-cursor>
    </a-camera>


    <a-assets>
      <a-mixin id="floats"
        attribute="position"
        direction="alternate"
        dur="3000"
        repeat="indefinite">
      </a-mixin>
    </a-assets>

    <a-box id="exit-sign"
      rotation="0 30 0"
      depth=".001"
      height=".5"
      width=".75"
      shader="flat"
      position="-4 3 -3"
      material="src: exit.png"
      onClick={this.props.test}>
      <a-animation mixin="floats"
        delay="500"
        from="-4 3 -3"
        to="-4 2.7 -3">
        </a-animation>
      </a-box>


      {/* render only if logged in? or save only if logged in?
      --REMOVED SIGN THAT WOULD SHOW THE CARD MEANINGS AND MOVED READING SUBMIT TO THIRD CARD */}



          {/* deck */}
          <a-entity id="deck"
            rotation= "0 90 15"
            position="0 .3 -3">>
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

            {/* card 1 */}
            <a-box id="card-1"
              class="card"
              position="-3 3.4 -1000"
              rotation="0 10 0"
              width="2"
              height="3"
              depth=".1"
              src="persona.png"
              shader="flat"
              visible="true">
              <a-animation mixin="floats"
                delay="300"
                begin="start"
                from="-3 3.4 -4.5"
                to="-3 3.2 -4.5">
                </a-animation>
                <a-animation
                  attribute="position"
                  begin="start"
                  from="-3 3.4 -1000"
                  to="-3 3.4 -4.5">
                  </a-animation>
                  <a-animation
                    attribute="rotation"
                    begin="wee"
                    from="0 10 0"
                    to="0 550 0">
                    </a-animation>
                    <a-plane id="face-1"
                      class="face"
                      shader="flat"
                      position=".014 0 -.06"
                      rotation="0 180 0"
                      width="2"
                      height="3"
                      depth=".1"
                      src="persona.png"

                      ></a-plane>
                    <a-entity class="text"
                      geometry="primitive:plane; height:3; width:2;"
                      material="visible:false;"
                      rotation="0 180 0"
                      position=".026 0 -.12"
                      text="value: ;
                      lineHeight:50;
                      letterSpacing:2;
                      anchor:align;
                      align:center;
                      opacity:.25;
                      width:2;
                      height:3;
                      wrapCount:25"
                      >

                    </a-entity>
              </a-box>

              {/* card 3 rightmost */}
            <a-box id="card-3"
              position="3 3.4 -1000"
              rotation="0 -10 0"
              width="2"
              height="3"
              depth=".1"
              src="persona.png"
              shader="flat"
              visible="true"
              >
              {/* float */}
              <a-animation mixin="floats"
                delay="700"
                begin="start"
                from="3 3.1 -4.5"
                to="3 3.4 -4.5">
                </a-animation>
                {/* forward */}
                <a-animation
                  attribute="position"
                  begin="start"
                  from="3 3.4 -1000"
                  to="3 3.1 -4.5">
                  </a-animation>
                  <a-animation
                    attribute="rotation"
                    begin="wee"
                    from="0 -10 0"
                    to="0 170 0">
                    </a-animation>
                    <a-plane
                      class="face"
                      shader="flat"
                      position="-.006 0 -.06"
                      rotation="0 180 0"
                      width="2"
                      height="3"
                      depth=".1"
                      src="persona.png"
                      ></a-plane>
                      <a-entity class="text"
                        geometry="primitive:plane; height:3; width:2"
                        material="visible:false"
                        rotation="0 180 0"
                        position=".026 0 -.12"
                        text="value: ;
                        lineHeight:50;
                        letterSpacing:2;
                        anchor:align;
                        align:center;
                        opacity:.25;
                        width:2;
                        height:3;
                        wrapCount:25"
                        >
                      </a-entity>
              </a-box>
            <a-box id="card-2"
              position="0 3.4 -1000"
              rotation="0 0 0"
              width="2"
              height="3"
              depth=".1"
              src="persona.png"
              shader="flat"
              visible="true">
              {/* space float */}
              <a-animation mixin="floats"
                dur="2000"
                delay="700"
                begin="start"
                from="0 3.2 -4.5"
                to="0 3.5 -4.5">
                </a-animation>
                {/* fly forward alot */}
                <a-animation
                  attribute="position"
                  begin="start"
                  from="0 3.4 -1000"
                  to="0 3.4 -4.5">
                  </a-animation>
                  <a-animation
                    attribute="rotation"
                    begin="wee"
                    from="0 0 0"
                    to="180 0 180">
                    </a-animation>
                    <a-plane
                      class="face"
                      shader="flat"
                      position="0 0 -.06"
                      rotation="0 180 0"
                      width="2"
                      height="3"
                      depth=".1"
                      src="persona.png"

                      ></a-plane>
                      <a-entity class="text"
                        geometry="primitive:plane; height:3; width:2"
                        material="visible:false"
                        rotation="0 180 0"
                        position=".026 0 -.12"
                        text="value: ;
                        lineHeight:50;
                        letterSpacing:2;
                        anchor:align;
                        align:center;
                        opacity:.25;
                        width:2;
                        height:3;
                        wrapCount:25"
                        >
                      </a-entity>
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
