import React from 'react';
import BuyButton from '../BuyButton/buyButton';

class AvailableStock extends React.Component {
    render(){
        return (
            this.props.availableStocks.map(stock => {
                return (
                    <li key={stock.id}>
                        <span>Stock: {stock.stockName}</span>
                        <span>Price: ${stock.stockPrice}</span>
                        <BuyButton onClick={this.props.onBuyStock.bind(this,stock.id)}></BuyButton>
                    </li>
                );
            })
        );
    }
}



export default AvailableStock;