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
    console.log('network: ', network);
    window.ethereum.enable().then((account) =>{
      const defaultAccount = account[0]
      web3.eth.defaultAccount = defaultAccount
      this.setState({"account": defaultAccount})
      console.log("account: ", defaultAccount);
    })
  }
  // Fetch Account
  constructor(props){
    super(props);
    this.state = {
      account: ''
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Hello world</h1>
        <p>Your account: {this.state.account}</p>
      </div>
    );
  }
}

export default App;
