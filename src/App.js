import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){

    super(props);
    this.state = { soundEffect : ""};


  }


  handleClick = (e) => {

    this.setState({soundEffect: e.target.id});
    e.target.children[0].play();
    

  };

  
  render() {
    const mp3Sources = [
      "https://www.soundjay.com/misc/sounds/bell-ringing-01.mp3",
      "https://www.soundjay.com/misc/sounds/censor-beep-4.mp3",
      "https://www.soundjay.com/misc/sounds/magic-chime-01.mp3",
      "https://www.soundjay.com/misc/sounds/dream-harp-01.mp3",
      "https://www.soundjay.com/misc/sounds/bulb-horn-02.mp3",
      "https://www.soundjay.com/human/sounds/fart-01.mp3",
      "https://www.soundjay.com/mechanical/sounds/mechanical-clonk-1.mp3",
      "https://www.soundjay.com/mechanical/sounds/smack-1.mp3",
      "https://www.soundjay.com/misc/sounds/slide-1.mp3"
    ];

    const ids = [
      "Bell",
      "Censor",
      "Chime",
      "Harp",
      "Horn",
      "Fart",
      "Clonk",
      "Smack",
      "Slide"
    ];

    

    const drumPads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C' ].map( (item, i) => {

      return <button id={ids[i]} className="drum-pad" key={i} onClick={this.handleClick}>{item}
        <audio id={item} className="clip" src={mp3Sources[i]}></audio>
      </button>

    });

   

    return (

      <div id="drum-machine" className="App">

        <div id="display">{this.state.soundEffect}</div>

        {drumPads}

      </div>
    );
  }
}

export default App;
