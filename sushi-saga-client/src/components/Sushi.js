import React, { Fragment } from 'react'

class Sushi extends React.Component {
  
  state = {
    eaten: false
  }

  handleClick = () => {
    if (this.props.sushiObj.price <= this.props.balance && this.state.eaten === false) {
      this.setState({eaten: true}, this.props.eatSushi(this.props.sushiObj))
    }
  }
  
  render() {
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.handleClick}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            this.state.eaten ?
              null
            :
              <img src={this.props.sushiObj.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushiObj.name} - ${this.props.sushiObj.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
