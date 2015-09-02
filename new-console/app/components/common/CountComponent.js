import React from 'react'

export default class CountComponent extends React.Component {

 constructor() {
    super()
    this.state ={
      count:0
    }
  }

  render(){
      var iconString = this.props.icons.join(' ') + ' glyphicon'

      return (

          <div data-rel="tooltip" title={this.props.label} className="panel panel-default count-panel">
          
          <span className={iconString}></span>
          
            <div className="title">{this.props.label}</div>
            <div className="count">{this.state.count}</div>
          
      </div>)
    }

  }
