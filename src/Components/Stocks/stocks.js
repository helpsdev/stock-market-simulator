import React from 'react';
import AvailableStock from '../AvailableStock/availableStock';
import OwnedStock from '../OwnedStock/ownedStock';
import StockList from '../../stocks_data.json';


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
            <div>
                <section>
                    <h2>Stocks Available</h2>
                    <AvailableStock availableStocks={this.state.availableStocks} onBuyStock={this.handleBuyStock.bind(this)}></AvailableStock>
                </section>
                <section>
                    <h2>Stocks Owned</h2>
                    <OwnedStock ownStocks={this.state.ownStocks}></OwnedStock>
                </section>
            </div>
        );
    }
}

export default Stocks;