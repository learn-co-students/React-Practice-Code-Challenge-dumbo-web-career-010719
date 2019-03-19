import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    balance: 50,
    display: [],
    plates: [],
    eaten: {}
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState({sushis}));
  }

  addSushi = () => {
    let sushisCopy = [...this.state.sushis];
    let displayCopy = [...this.state.display];
    displayCopy.forEach(sushi => sushi.id in this.state.eaten ? null : sushisCopy.push(sushi));
    displayCopy = sushisCopy.splice(0, 4);

    this.setState({sushis: sushisCopy, display: displayCopy});
  }

  eatSushi = (sushiObj) => {
    let displayCopy = [...this.state.display];
    const eatenCopy = {...this.state.eaten};
    eatenCopy[sushiObj.id] = sushiObj;

    this.setState({
      balance: this.state.balance - sushiObj.price,
      plates:[...this.state.plates, sushiObj.price],
      display: displayCopy,
      eaten: eatenCopy
    });
  }

  addBalance = (amount) => {
    this.setState({balance: this.state.balance + amount});
  }

  render() {
    return (
      <div className="app">
        <Form addBalance={this.addBalance} />
        <SushiContainer 
          display={this.state.display} 
          addSushi={this.addSushi} 
          balance={this.state.balance} 
          eatSushi={this.eatSushi}
        />
        <Table plates={this.state.plates} balance={this.state.balance} />
      </div>
    );
  }
}

export default App;
