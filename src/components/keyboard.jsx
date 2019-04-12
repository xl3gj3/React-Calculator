import React from 'react'
import NumberKeys from './numberKeys'
import OperatorKeys from "./operatorKeys";
// import PropTypes from 'prop-types'

const Keyboard = (props) => {
  // this will not have any state
  // input : different kind of keys
  // raise : response to key, set the calculator state , and re-render

  /*
    the keyboard area will contain 3 parts, operators, number, functions

    we implement opearators and numbers only currently
  */
  // console.log(props);
  const {numberKeys,operatorKeys,onHandleInput} = props
  return (
    <div className="mt-4 row">
      <div className = "col-10">
        <NumberKeys onHandleInput={onHandleInput} data={numberKeys}/>
      </div>
      <div className = "col">
        <OperatorKeys onHandleInput={onHandleInput} data={operatorKeys}/>
      </div>
    </div>
  )
}

export default Keyboard
