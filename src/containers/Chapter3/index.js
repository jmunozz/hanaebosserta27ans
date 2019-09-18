import React, { Component } from 'react';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';

import center_picture from './center.png';
import './Chapter3.css';


const SECRET_NEXT_CHAPTER = '@BaEtYhrDs8BXdPg';

class Chapter3 extends Component {

    static propTypes = {
        updateChapter: PropTypes.func.isRequired,
    }

    state = {
        title: 'Chapitre 3',
        subtitle: 'L\'égo',
    }

    success = () => {
        console.log('success!');
        const { updateChapter } = this.props;
        Cookies.set('chapter', SECRET_NEXT_CHAPTER);
        updateChapter();
    }

    targetOnClick = () => {
        this.success();
    }

    render() {

        const { title, subtitle } = this.state;

        return (
            <div>
                <h1>{title}</h1>
                <h1>{subtitle}</h1>
                <div className="container target-container">
                    <img src={center_picture} alt="center" />
                    <p>Je suis au centre</p>
                    <div className="target" onClick={this.targetOnClick}/>
                </div>
            </div>
        )
    }
}

export default Chapter3;