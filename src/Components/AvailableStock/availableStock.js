import React from 'react';
import BuyButton from '../BuyButton/buyButton';

class AvailableStock extends React.Component {
    render(){
        return (
            this.props.availableStocks.map(stock => {
                return (
                    <li key={stock.id}>
                        <span>Stock: {stock.name}</span>
                        <span>Price: ${stock.price}</span>
                        <BuyButton onClick={this.props.onBuyStock.bind(this,stock.id)}></BuyButton>
                    </li>
                );
            })
        );
    }
}



export default AvailableStock;