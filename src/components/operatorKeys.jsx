import React from 'react'
// import PropTypes from 'prop-types'

const OperatorKeys = (props) => {
  const {data : keys, onHandleInput} = props;
  // console.log(keys);

  return (
    <React.Fragment>
      {keys.map((op)=>
        <div key={op.lable} className="rounded-circle mb-1">
          <button  children={op.lable} onClick={()=>{onHandleInput(op)}} className="btn btn-warning rounded-circle opearatorsKeyWidth"/>
        </div>
      )}
    </React.Fragment>
  )
}

export default OperatorKeys
