import React from 'react';
import BuySellButton from '../BuySellButton/buySellButton';

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
                        <BuySellButton onClick={this.buyStock}></BuySellButton>
                    </li>
                );
            })
        );
    };
}

export default OwnedStock;