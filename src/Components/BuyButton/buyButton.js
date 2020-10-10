import React from 'react';

class BuyButton extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <button onClick={this.props.handleClick}>Buy</button>
        );
    }
}

export default BuyButton;