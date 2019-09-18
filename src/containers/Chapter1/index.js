import React, { Component } from 'react';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';

import './Chapter1.css';
import trumpet from './trumpet.png';


const SECRET_NEXT_CHAPTER = '9-qH4gALzaCFeWB2';
const SOLUTION = 'CHUT';
const sounds = [
    { path: 'assets/sounds/pig_sound.wav' },
    { path: 'assets/sounds/hibou_sound.wav' },
    { path: 'assets/sounds/urubu_sound.wav' },
    { path: 'assets/sounds/taureau_sound.wav' }
];

class Chapter1 extends Component {

    static propTypes = {
        updateChapter: PropTypes.func.isRequired,
    }

    state = {
        title: 'Chapitre 1',
        subtitle: 'Le bruit',
        solution: '',
    }

    success = () => {
        const { updateChapter } = this.props;
        Cookies.set('chapter', SECRET_NEXT_CHAPTER);
        updateChapter();
    }

    soundOnClick = (index) => {
        const path = sounds[index].path;
        const audio = new Audio(path);
        audio.play();
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { solution } = this.state;
        if (solution.toLowerCase() === SOLUTION.toLowerCase())
            this.success();
        else 
            alert('Pho');
    }

    onChangeSolution = (event) => {
        const { name, value } = event.target;
        this.setState({ solution: value });
    }

    render() {
        const { title, subtitle } = this.state;

        const soundBoxes = sounds.map((sound, index) => {
            return (
                <div className="trumpet-container">
                    <img onClick={() => this.soundOnClick(index)} src={trumpet} />
                </div>
            )
        })
        return (
            <div>
                <h1>{title}</h1>
                <h1>{subtitle}</h1>
                <div className="sounds-container">
                    {soundBoxes}
                </div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        onChange={this.onChangeSolution}
                    />
                    <button type="submit" >
                        Je valide 
                    </button>
                </form>
            </div>
        )
    }
}

export default Chapter1;