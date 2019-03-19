import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let sushiPlates = props.sushis.map(sushiObj => <Sushi key={sushiObj.id} sushi={sushiObj} handleClickSushi={props.handleClickSushi} />)



  return (
    <Fragment>
      <div className="belt">
        {sushiPlates}
        <MoreButton sushis={props.sushis} handleClickMore={props.handleClickMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
