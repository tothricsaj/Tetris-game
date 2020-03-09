import React from 'react';
import Canvas from '../Canvas/Canvas.js';

class GameView extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
          connect: true,
      };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }
  
  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }
  
  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }
  
  updateAnimationState(elapsedTime) {
      try {
        setTimeout(() => {
            this.setState({connect: true}); // I draw a blank about this....explore!
            this.rAF = requestAnimationFrame(this.updateAnimationState);
        }, 100);
      } catch(e) {
            console.log('what the bloody horse lungs?')
            console.log(e);
            cancelAnimationFrame(this.rAF);
            this.setState({...this.state, gameOver: true});
      }
   }
  
  render() {
      return <Canvas />
  }
}

export default GameView;
