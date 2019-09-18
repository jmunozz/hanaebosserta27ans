import React, { Component } from 'react';
import Cookies from 'js-cookie';

import './App.css';
import ovnis from './ovnis.png';


/**
 * Sub Components
 */
import CountDown from '../../components/CountDown';
import Chapter1 from '../Chapter1';
import Chapter2 from '../Chapter2';
import Chapter3 from '../Chapter3';
import Chapter4 from '../Chapter4';
import Congrats from '../Congrats';


function shouldDisplayCountDown() {
  const currentTime = new Date();
  const birthdayTime = new Date(2018, 6, 15);
  return ((birthdayTime.getTime() - currentTime.getTime()) > 0);
}

const SECRET_2 = '9-qH4gALzaCFeWB2';
const SECRET_3 = 'pHj*AN6P*dL!jh_Z';
const SECRET_4 = '@BaEtYhrDs8BXdPg';
const LAST_SECRET = 'wGNQs+=!-#zY52AL';

class App extends Component {

  state = {
    displayCountDown: shouldDisplayCountDown(),
    currentChapter: Cookies.get('chapter'),
  }

  updateChapter = () => {
    this.setState({
      currentChapter: Cookies.get('chapter'),
    })
  }

  render() {
    const { displayCountDown, currentChapter } = this.state;
    const chapter1 = (<div className="App container center"><Chapter1 updateChapter={this.updateChapter} /></div>);
    const chapter2 = (<div className="App container center"><Chapter2 updateChapter={this.updateChapter} /></div>);
    const chapter3 = (<div className="App container center"><Chapter3 updateChapter={this.updateChapter} /></div>);
    const chapter4 = (<div className="App container center" ><Chapter4 updateChapter={this.updateChapter} /></div>);
    const congrats = (
      <div className="App app-ovnis">
        <img id="ovnis" src={ovnis} />
        <Congrats  />
      </div>
    );



    if (displayCountDown) 
      return (
        <div className="App container center">
          <CountDown />
        </div>
      );
    switch (currentChapter) {
      case SECRET_2: 
        return chapter2;
      case SECRET_3:
        return chapter3;
      case SECRET_4: 
        return chapter4;
      case LAST_SECRET: 
        return congrats;
      default: 
        return chapter1;
    }
  }
}

export default App;
