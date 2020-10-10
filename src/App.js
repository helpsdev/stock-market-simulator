import React from 'react';
import './App.css';
import AvailableStock from './Components/AvailableStock/availableStock';
import OwnedStock from './Components/OwnedStock/ownedStock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WELCOME!</h1>
      </header>
      <section>
        <h2>Stocks Available</h2>
        <AvailableStock></AvailableStock>
      </section>
      <section>
        <h2>Stocks Owned</h2>
        <OwnedStock></OwnedStock>
      </section>
    </div>
  );
}

export default App;
