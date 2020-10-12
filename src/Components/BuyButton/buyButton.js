import React from 'react';
import './buyButton.css'

class BuyButton extends React.Component{
    render(){
        return(
            <button className="button" onClick={this.props.onClick}>Buy</button>
        );
    }
}

export default BuyButton;