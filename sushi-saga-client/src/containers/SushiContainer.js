import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const sushiArr = props.display.map(sushi => <Sushi key={sushi.id} sushiObj={sushi} balance={props.balance} eatSushi={props.eatSushi} />)

  return (
    <Fragment>
      <div className="belt">
        {
          sushiArr
        }
        <MoreButton addSushi={props.addSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer