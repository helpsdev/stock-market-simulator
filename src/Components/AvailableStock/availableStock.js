import React from 'react';
import StockList from '../../stocks_data.json';
import BuySellButton from '../BuySellButton/buySellButton';

class AvailableStock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: StockList.slice(0,10),
            ownStocks:[]
        };
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



export default AvailableStock;