import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import Form from '../components/Form'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eaten)}
        </div>
      </div>
      <Form handleSubmit={props.handleSubmit} />
    </Fragment>
  )
}

export default Table
