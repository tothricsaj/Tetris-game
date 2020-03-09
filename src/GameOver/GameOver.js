import React from 'react';
import './GameOver.style.css';

class GameOver extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="wrapper">
                <h2>Game over</h2>
            </div>
        )
    }
}

export default GameOver;
