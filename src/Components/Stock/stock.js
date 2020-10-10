import React from 'react';
import StockList from '../../stocks_data.json';
import StockTypes from './stockTypes';
import BuySellButton from '../BuySellButton/buySellButton';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: props.type === StockTypes.STOCKS_AVAILABLE ? this.getAvailableStocks() : this.getOwnedStocks(),
            ownStocks:[]
        };
    }

    getAvailableStocks(){
        return StockList.slice(0,10);
    }
    getOwnedStocks(){
        return [];
    }

    buyStock(stockId){
        const buyingStock = this.state.stocks.filter(s => s.stockId === stockId);
        this.setState({
            stocks: this.state.stocks,
            ownStocks: this.ownStocks.concat([
                buyingStock
            ])
        });
    }

    render(){
        return (
            this.state.stocks.map(stock => {
                return (
                    <li key={stock.stockId}>
                        <span>Stock: {stock.stockName}</span>
                        <span>Price: ${stock.stockPrice}</span>
                        <BuySellButton onClick={this.buyStock}></BuySellButton>
                    </li>
                );
            })
        );
    }
}



export default Stock;