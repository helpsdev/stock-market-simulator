import React from 'react';

class SellButton extends React.Component{
    render(){
        return(
            <button onClick={this.props.onClick}>Sell</button>
        );
    }
}

export default SellButton;