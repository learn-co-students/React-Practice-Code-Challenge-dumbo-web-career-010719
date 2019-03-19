import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    money: 100,
    eaten: [],
    counter: 4
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({ sushis }))
  }

  handleClickSushi = (e, props) => {
    if(e.target.nodeName === 'IMG'){
      const newArr = [...this.state.sushis]
      let sush = newArr.find(sushi => sushi.img_url === e.target.src)
      let cost = sush.price
      let dupMoney = this.state.money
      if(dupMoney >= cost) {
        e.target.remove()
        let newMoney = dupMoney - cost
        console.log(newMoney);
        this.setState({
          money: newMoney,
          eaten: [props, ...this.state.eaten]
        })
      } else {
        alert('Sorry, go to the bank!')
      }
    }
  }

  handleClickMore = (e) => {
    this.setState({
      counter: this.state.counter + 4
    })
  }

  handleSubmit = (input) => {
    this.setState({
      money: this.state.money + parseInt(input)
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis.slice(this.state.counter - 4, this.state.counter)} handleClickSushi={this.handleClickSushi} handleClickMore={this.handleClickMore} />
        <Table sushis={this.state.sushis} money={this.state.money} eaten={this.state.eaten} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
