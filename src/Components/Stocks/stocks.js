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
        this.state = {
            availableStocks: availableStocksKeyValue,
            ownStocks:{},
            funds:1000
        };
    }
    
    updateWhenBuyFunds(stockBought){
        let currentFunds = this.state.funds;
        
        currentFunds -= stockBought.price;

        this.setState({
            funds:currentFunds
        });

        
    }

    updateWhenSellFunds(stockSold){
        let currentFunds = this.state.funds;
        
        currentFunds += stockSold.price;

        this.setState({
            funds:currentFunds
        });

        
    }

    handleSellStock(stockId){
        const currentOwnStocks = this.state.ownStocks;
        const stockOwned = currentOwnStocks[stockId];

        if (stockOwned && stockOwned.owned > 0) {
            stockOwned.owned--;
            this.updateWhenSellFunds(stockOwned);
        }else{
            delete currentOwnStocks[stockId];
        }

        this.setState({
            ownStocks: currentOwnStocks
        });
    }

    handleBuyStock(stockId){
        const currentAvailableStocks = this.state.availableStocks;
        const currentOwnStocks = this.state.ownStocks;
        const isStockOwned = currentOwnStocks[stockId];
        const buyingStock = currentAvailableStocks[stockId];

        if (isStockOwned) {
            buyingStock.owned++;
        }else{
            buyingStock.owned = 1;
        }
        
        currentOwnStocks[stockId] = buyingStock;

        this.updateWhenBuyFunds(buyingStock);

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
                        <OwnedStock ownStocks={this.state.ownStocks} onSellStock={this.handleSellStock.bind(this)}></OwnedStock>
                    </ul>
                </section>
                <section>
                    <h2>${this.state.funds.toFixed(2)}</h2>
                </section>
            </div>
        );
    }
}

export default Stocks;