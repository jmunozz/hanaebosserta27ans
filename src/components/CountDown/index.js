import React, { Component } from 'react';


class CountDown extends Component {

    state = {
        currentTime: new Date(),
        birthdayTime: new Date(2018, 6, 15),
    }

    setNewTime = () => {
        this.setState({
            currentTime: new Date(),
        });
    }

    format = (time) => {
        if (!Math.floor(time / 10))
            return `0${time.toString()}`;
        return time.toString();
    }

    render() {
        setTimeout(this.setNewTime, 1000);
        const { currentTime, birthdayTime } = this.state;
        const leftTimeInSeconds = (birthdayTime.getTime() - currentTime.getTime()) / 1000;
        const leftHours = Math.floor(leftTimeInSeconds / 3600);
        const leftMinutes = Math.floor((leftTimeInSeconds % 3600) / 60);
        const leftSeconds = Math.floor((leftTimeInSeconds % 3600) % 60);
        const hours = this.format(leftHours);
        const minutes = this.format(leftMinutes);
        const seconds = this.format(leftSeconds);

        return (
            <div style={{fontSize: '4em'}} >
                <p >{hours} heures</p>
                <p> {minutes} minutes</p>
                <p> {seconds} secondes</p>
            </div>
        )
    }
}

export default CountDown;