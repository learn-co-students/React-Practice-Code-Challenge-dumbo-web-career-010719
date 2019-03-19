import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/MoneyForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    money: 100
  }

addMoney = (moneyAmt) => {
  let amt = parseInt(moneyAmt)
  this.setState({
    money: this.state.money + amt
  })

}

changeOrder = () => {
  this.setState({
    sushis: [...this.state.sushis.splice(4), ...this.state.sushis.splice(0,4)]
  })
}

handleEatClick = (sushiObj) => {
  this.state.money - sushiObj.price >= 0 && !this.state.eaten.map((plate) => {return plate.created_at}).includes(sushiObj.created_at)?
      this.setState({
        eaten: [...this.state.eaten, sushiObj],
        money: (this.state.money - sushiObj.price)
      }) : console.log("You're broke or this has been purchased already.")
  }

componentDidMount() {
  fetch('http://localhost:3000/sushis')
  .then(res => res.json())
  .then(json => this.setState({ sushis: json}))
}

  render() {
    return (
      <div className="app">
        <SushiContainer  changeOrder={this.changeOrder} handleEatClick={this.handleEatClick} eaten={this.state.eaten} sushis={this.state.sushis}/>
        <Table money={this.state.money} eaten={this.state.eaten}/>
        <MoneyForm addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;
