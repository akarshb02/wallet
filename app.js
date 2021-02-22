
import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import MyToken from './contracts/MyToken.json';

class App extends Component {

  async componentWillMount(){
    await this.loadWeb3();
    await this.loadBlockChainData();
  }

  async loadWeb3(){
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()

    }
    else if (window.web3){
        window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert("Non ethereum browser");
    }

    }
    async loadBlockChainData(){
      const web3 =window.web3
      const accounts = await web3.eth.getAccounts();
      this.setState({account:accounts[0]})
      const daiTokenAddress = "0xbdE0E4eFd728c777D593daFBdCddc84899f764Af";
      const token = new web3.eth.Contract(MyToken.abi,daiTokenAddress);
      this.setState({MyToken:token})
      const balance = await MyToken.methods.balanceOf(this.state.account).call()
        this.setState({balance:web3.utils.fromWei(balance.toString(),'Ether')})
      
      
    }
    constructor(props) {
      super(props);
      this.state = {
        accounts:'',
      balance:0,
    transactions:[]}
    }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
               
                <h1>Token</h1>
                <p>
                  Edit <code>src/components/App.js</code> and save to reload.
                </p>
                
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
