import React from 'react'
class Window extends React.Component {

  render () {
    const {data} = this.props;
    // console.log(data);

    return (
      <div className="border border-secondary pt-5 pb-2 pr-1 overflow-auto">
        <span className="float-right mr-3">{data}</span>
      </div>
    )
  }
}

export default Window
