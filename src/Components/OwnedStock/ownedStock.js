import React from 'react';
import SellButton from '../SellButton/sellButton';

class OwnedStock extends React.Component{
    render(){
        return (
            Object.keys(this.props.ownStocks).map(k =>{
                return (
                    <li key={this.props.ownStocks[k].id}>
                        <span>Stock: {this.props.ownStocks[k].name}</span>
                        <span>Price: ${this.props.ownStocks[k].price} x {this.props.ownStocks[k].owned}</span>
                        <SellButton></SellButton>
                    </li>
                );
            })
        );
    };
}

export default OwnedStock;