import React from 'react';
import './App.css';
import Stock from './Components/Stock/stock';
import StockTypes from './Components/Stock/stockTypes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WELCOME!</h1>
      </header>
      <section>
        <h2>Stocks Available</h2>
        <Stock type={StockTypes.STOCKS_AVAILABLE}></Stock>
      </section>
      <section>
        <h2>Stocks Owned</h2>
        <Stock type={StockTypes.STOCKS_OWNED}></Stock>
      </section>
    </div>
  );
}

export default App;
