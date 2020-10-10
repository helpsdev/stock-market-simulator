import React from 'react';

class BuyButton extends React.Component{
    render(){
        return(
            <button onClick={this.props.handleClick}>Buy</button>
        );
    }
}

export default BuyButton;