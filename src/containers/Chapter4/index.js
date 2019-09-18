import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import man from './man.png';
import './Chapter4.css';

const SOLUTION = 'OVNIS';
const SECRET_NEXT_CHAPTER = 'wGNQs+=!-#zY52AL';

class Chapter4 extends Component {

    static propTypes = {
        updateChapter: PropTypes.func.isRequired,
    }

    state = {
        title: 'Chapitre 4',
        subtitle: 'La rencontre',
        solution: '',
    }

    success = () => {
        const { updateChapter } = this.props;
        Cookies.set('chapter', SECRET_NEXT_CHAPTER);
        updateChapter();
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { solution } = this.state;
        if (SOLUTION.toLowerCase().includes(solution.toLowerCase()))
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


        return (
            <div>
                <div>
                    <h1>{title}</h1>
                    <h1>{subtitle}</h1>
                </div>
                <div className="container row container-chapter4">
                    <img src={man} alt="man" />
                    <img src={man} alt="man" />
                    <img src={man} alt="man" />
                </div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        onChange={this.onChangeSolution}
                    />
                    <button type="submit ">
                        Je valide 
                    </button>
                </form> 
            </div>
        )
    }
}

export default Chapter4;