import React from 'react';
import StockList from '../../stocks_data.json';
import StockTypes from './stockTypes';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: props.type === StockTypes.STOCKS_AVAILABLE ? this.getAvailableStocks() : this.getOwnedStocks()
        };
    }

    getAvailableStocks(){
        return StockList.slice(0,10);
    }
    getOwnedStocks(){
        return [];
    }

    render(){
        return (
            this.state.stocks.map(stock => {
                return (
                    <li>
                        <span>Stock: {stock.stockName}</span>
                        <span>Price: ${stock.stockPrice}</span>
                        <button>Buy</button>
                    </li>
                );
            })
        );
    }
}



export default Stock;