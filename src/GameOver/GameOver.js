import React from 'react';
import style from './GameOver.style.scss';

class GameOver extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={style.wrapper}>
                <h2>Game over</h2>
            </div>
        )
    }
}

export default GameOver;
