import React, { Component } from 'react';
import './style.css';
import Web3 from 'web3';

class App extends Component {
  componentWillMount() {
    this.loadBlockChainData();
  }
  async loadBlockChainData() {
    const web3 = new Web3(Web3.givenProvider || "localhost://8545");
    const network = await web3.eth.net.getNetworkType();
    console.log('network:', network);
  }
  render() {
    return (
      <div className="container">
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
