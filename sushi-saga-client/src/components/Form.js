import React from 'react'

class Form extends React.Component {

  state = {
    input: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBalance(+this.state.input);
    this.setState({input: ''});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Amount:
          <input type="number" value={this.state.input} onChange={(event) => this.setState({input:event.target.value})}/>
        </label>
        <input type="submit" value="Add Balance"/>
      </form>
    )
  }

}

export default Form;
