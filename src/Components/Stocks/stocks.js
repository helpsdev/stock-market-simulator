import React from 'react';
import AvailableStock from '../AvailableStock/availableStock';
import OwnedStock from '../OwnedStock/ownedStock';
import StockList from '../../stocks_data.json';
import './stocks.css'


class Stocks extends React.Component{
    constructor(props){
        super(props);
        this.maxStockList = 10;
        const availableStocksKeyValue = {};
        StockList.slice(0, this.maxStockList).forEach(s => {
            availableStocksKeyValue[s.id] = s;
        });
        this.state = {
            availableStocks: availableStocksKeyValue,
            ownStocks:{},
            funds:1000
        };
    }
    
    updateStocks(){
        const MAX_GROWTH = 1.25;
        const MIN_GROWTH = 0.75;
        const currentAvailableStocks = this.state.availableStocks;
        const currentOwnStocks = this.state.ownStocks;
        StockList
            .slice(0, this.maxStockList)
            .forEach(s => {
                const newStockPrice = s.price * (Math.random() * (MAX_GROWTH - MIN_GROWTH) + MIN_GROWTH);
                
                if (currentAvailableStocks[s.id]) {
                    currentAvailableStocks[s.id].price = newStockPrice;
                }
                if (currentOwnStocks[s.id]) {
                    currentOwnStocks[s.id].price = newStockPrice;
                }
                
            });
        this.setState({
            availableStocks: currentAvailableStocks,
            ownStocks: currentOwnStocks
        });
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.updateStocks(),
            5000
          );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
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
        }

        if (stockOwned.owned === 0) {
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

        if(this.state.funds < buyingStock.price) return;

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
                <header style={{width:100+"%"}}>
                    <h1>WELCOME!</h1>
                </header>
                <section style={{width:100+"%"}}>
                    <h2 style={{float:"right"}}>Funds: ${this.state.funds.toFixed(2)}</h2>
                </section>
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
            </div>
        );
    }
}

export default Stocks;