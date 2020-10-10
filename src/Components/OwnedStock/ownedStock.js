import React from 'react';
import SellButton from '../SellButton/sellButton';

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
                        <SellButton></SellButton>
                    </li>
                );
            })
        );
    };
}

export default OwnedStock;