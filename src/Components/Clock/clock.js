import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gameTimeElapsed:0,
            speed:6
        };
    }
    
    updateClock(){
        let currentGameTimeElapsed = this.state.gameTimeElapsed;
        currentGameTimeElapsed++;
        
        this.setState({
            gameTimeElapsed: currentGameTimeElapsed
        });
    }

    componentDidMount(){
        const currentSpeed = this.state.speed;

        this.timerID = setInterval(
            () => this.updateClock(),
            1000/currentSpeed
          );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    getGameTime(){
        const currentGameTimeElapsed = this.state.gameTimeElapsed;
        let seconds = currentGameTimeElapsed % 60;
        let minutes = Math.floor(currentGameTimeElapsed / 60);
        let hours = Math.floor((currentGameTimeElapsed / 60) / 60);

        return `${hours} hrs ${minutes} min ${seconds} s`;
    }

    render(){
        return(
            <span>Game Time: {this.getGameTime()}</span>
        );
    }
}

export default Clock;