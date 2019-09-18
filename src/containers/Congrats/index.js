import React, { Component } from 'react';

import blackHole from './black-hole.svg';
import './Congrats.css';

class Congrats extends Component {

    render() {

        return (
            <div style={{ zIndex: 100 }}>
                <h1>Bravo le singe !</h1>
                <div className="column congrats-container">
                    <img src={blackHole} alt="trou noir" />
                    <p>Joyeux anniversaire</p>
                    <p>Tu gagnes une immersion de 30 minutes dans un trou noir.</p>
                    <p>Quel meilleur endroit pour rencontrer des extra-terrestres ?</p>
                </div>
            </div>
        )
    }
}

export default Congrats;