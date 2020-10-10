import React from 'react';
import AvailableStock from '../AvailableStock/availableStock';
import OwnedStock from '../OwnedStock/ownedStock';
import StockList from '../../stocks_data.json';


class Stocks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            availableStocks: StockList.slice(0,10),
            ownStocks:[]
        };
    }
    
    handleBuyStock(stockId){
        const buyingStock = this.state.availableStocks.find(s => s.id === stockId);
        console.log(buyingStock);
        this.setState({
            ownStocks: this.state.ownStocks.concat([
                buyingStock
            ])
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