import React from 'react';

class BuySellButton extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <button onClick={this.props.handleClick}>Buy</button>
        );
    }
}

export default BuySellButton;