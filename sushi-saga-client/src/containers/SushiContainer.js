import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let arrOfSushis = props.sushis.map((sushi) => {return <Sushi handleEatClick={props.handleEatClick} eaten={props.eaten} dish={sushi}/>}).slice(0,4)

  return (
    <Fragment>
      <div className="belt">
        {arrOfSushis}
        <MoreButton changeOrder={props.changeOrder}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
