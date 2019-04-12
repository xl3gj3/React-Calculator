import React from 'react'
// import PropTypes from 'prop-types'

const NumberKeys = (props) => {
  /*
    input {list of numbers key:, onHandleInput}
  */
  const {data : keys, onHandleInput} = props;
  // console.table(keys);
  let decode = require('decode-html');

  return (
    <div className = "row">
      { keys.slice(0).reverse().map((item)=>
      <div key={item.value} className={item.size === 2 ? "col-8 mb-3" : "col-4 mb-3" }>
          <button onClick={()=>{onHandleInput(item)}} className="btn btn-success form-control" children={item.lable.indexOf("%") < 0 ? item.lable : decode(item.lable)} />
      </div>)}
    </div>
  )
}

export default NumberKeys
