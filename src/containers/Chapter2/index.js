import React, { Component } from 'react';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';


import './Chapter2.css';

const SECRET_NEXT_CHAPTER = 'pHj*AN6P*dL!jh_Z';
const SOLUTION = 'GOSSELIN';

class Chapter2 extends Component {

    static propTypes = {
        updateChapter: PropTypes.func.isRequired,
    }

    state = {
        title: 'Chapitre 2',
        subtitle: 'La fureur',
        solution: '',
        blink: false,
        willBlink: false,
        showTitle: true,
    }

    success = () => {
        const { updateChapter } = this.props;
        Cookies.set('chapter', SECRET_NEXT_CHAPTER);
        updateChapter();
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

    blink = () => {
        const { willBlink } = this.state;

        if (willBlink) return;
        const next = Math.random() * 600;
        this.state.willBlink = true;
        setTimeout(() => {
            this.setState({
                willBlink: false,
                blink: !this.state.blink,
            }); 
        }, next);
    }

    hideTitle = (e) => {
        this.setState({
            showTitle: false,
        })
        setTimeout(() => this.setState({ showTitle: true }), 3000);
    }

    render() {

        this.blink();
        const { title, subtitle, blink, showTitle } = this.state;
        const style = (blink) ? { filter: 'invert(1)' } : {};
        const styleTitle = (!showTitle) ? { display: 'none' } : {};

        return (
            <div className="App container center" style={style}>
                <div>                
                    <div className="video-container" style={style} >
                        <iframe src="https://www.youtube.com/embed/32Z7qa0Beec?autoplay=1&controls=0&showinfo=0&playsinline=1" frameborder="0" allow="autoplay; encrypted-media"></iframe>
                        <div className="over" onClick={this.hideTitle} style={styleTitle}>
                            <h1>{title}</h1>
                            <h1>{subtitle}</h1>
                        </div>
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
            </div>
        )
    }
}

export default Chapter2;