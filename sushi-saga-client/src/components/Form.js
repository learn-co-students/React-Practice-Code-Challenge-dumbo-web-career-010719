import React from 'react'

class Form extends React.Component {

  state = {
    input: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state.input)
    this.setState({
      input: ""
    })
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <input type="text" name="money" placeholder="$$$" value={this.state.input} onChange={this.handleChange} />
        <input type="submit" value="Add Money"/>
      </form>
    )
  }
}

export default Form
