import React from 'react';
import AvailableStock from '../AvailableStock/availableStock';
import OwnedStock from '../OwnedStock/ownedStock';
import StockList from '../../stocks_data.json';
import './stocks.css'


class Stocks extends React.Component{
    constructor(props){
        super(props);
        const availableStocksKeyValue = {};
        StockList.slice(0,10).forEach(s => {
            availableStocksKeyValue[s.id] = s;
        });
        console.log(availableStocksKeyValue);
        this.state = {
            availableStocks: availableStocksKeyValue,
            ownStocks:{}
        };
    }
    
    handleBuyStock(stockId){
        const currentAvailableStocks = this.state.availableStocks;
        const currentOwnStocks = this.state.ownStocks;
        const isAlreadyOwned = currentOwnStocks[stockId];
        const buyingStock = currentAvailableStocks[stockId];

        if (isAlreadyOwned) {
            buyingStock.owned++;
        }else{
            buyingStock.owned = 1;
        }
        
        currentOwnStocks[stockId] = buyingStock;


        this.setState({
            ownStocks: currentOwnStocks
        });
    }

    render(){
        return(
            <div className="stocks">
                <section className="stocks-available">
                    <h2>Stocks Available</h2>
                    <ul>
                        <AvailableStock availableStocks={this.state.availableStocks} onBuyStock={this.handleBuyStock.bind(this)}></AvailableStock>
                    </ul>
                </section>
                <section className="stocks-owned">
                    <h2>Stocks Owned</h2>
                    <ul>
                        <OwnedStock ownStocks={this.state.ownStocks}></OwnedStock>
                    </ul>
                </section>
            </div>
        );
    }
}

export default Stocks;