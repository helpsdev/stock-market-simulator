import React from 'react';
import SellButton from '../SellButton/sellButton';

class OwnedStock extends React.Component{
    render(){
        return (
            this.props.ownStocks.map(stock =>{
                return (
                    <li key={stock.id}>
                        <span>Stock: {stock.name}</span>
                        <span>Price: ${stock.price}</span>
                        <span>Owned x {stock.owned}</span>
                        <SellButton></SellButton>
                    </li>
                );
            })
        );
    };
}

export default OwnedStock;