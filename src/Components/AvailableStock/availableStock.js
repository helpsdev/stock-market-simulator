import React from 'react';
import BuyButton from '../BuyButton/buyButton';

class AvailableStock extends React.Component {
    render(){
        return (
            Object.keys(this.props.availableStocks).map(key => {
                return (
                    <li key={this.props.availableStocks[key].id}>
                        <span>Stock {this.props.availableStocks[key].name}: </span>
                        <span>${this.props.availableStocks[key].price} </span>
                        <BuyButton onClick={this.props.onBuyStock.bind(this,this.props.availableStocks[key].id)}></BuyButton>
                    </li>
                );
            })
        );
    }
}



export default AvailableStock;