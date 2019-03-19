import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  state = {
    sushis: [],
    clicked: [],
    money: 200
  }

  componentDidMount(){
    fetch(API).then(resp => resp.json())
    .then(json =>
      this.setState({ sushis: json })
    )
  }

  handleClicked = (sushi) => {
    let eaten = [sushi, ...this.state.clicked]
    let avail = this.state.sushis.filter(sushis => sushis.id !== sushi.id)
    let remain = this.state.money - sushi.price
    if (this.state.money >= sushi.price) {
      this.setState({
        clicked: eaten,
        sushis: avail,
        money: remain
      })
    }else {
      alert('You don\'t have enough money!')
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.sushis.slice(0, 4)}
        clicked={this.state.clicked}
        handleClicked={this.handleClicked}/>
        <Table clicked={this.state.clicked}
        money={this.state.money}/>
      </div>
    );
  }
}

export default App;
