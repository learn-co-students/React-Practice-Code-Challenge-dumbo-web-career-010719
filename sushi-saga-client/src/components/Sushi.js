import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => {props.handleEatClick(props.dish)}}>
        {
          // console.log(props.eaten.map((plate) => {return plate.created_at}))
          props.eaten.map((plate) => {return plate.created_at}).includes(props.dish.created_at)
           ?
            null
          :
            <img src={props.dish.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.dish.name} - ${props.dish.price}
      </h4>
    </div>
  )
}

export default Sushi
