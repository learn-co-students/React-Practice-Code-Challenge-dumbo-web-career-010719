import React from 'react'

class MoneyForm extends React.Component {
  state= {
    value: ''
  }

onChange = (event) => {
this.setState({
  value: event.target.value
})
}

onClick = () => {
  this.props.addMoney(this.state.value)
  this.setState({
    value: ''
  })
}

  render(){
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.onChange}></input>
        <button onClick={this.onClick}>Add Money</button>
      </div>
    )
  }
}

export default MoneyForm
