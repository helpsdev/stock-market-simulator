import React from 'react';
import SellButton from '../SellButton/sellButton';

class OwnedStock extends React.Component{
    render(){
        return (
            this.props.ownStocks.map(stock =>{
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