import React from 'react';
import BuyButton from '../BuyButton/buyButton';

class OwnedStock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ownedStocks: []
        }
    }

    render(){
        return (
            this.state.ownedStocks.map(stock =>{
                return (
                    <li key={stock.id}>
                        <span>Stock: {stock.stockName}</span>
                        <span>Price: ${stock.stockPrice}</span>
                        <BuyButton onClick={this.buyStock}></BuyButton>
                    </li>
                );
            })
        );
    };
}

export default OwnedStock;