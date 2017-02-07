import React from 'react';

export default class CLockList extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (

            <div className="clockList">
            <div className="clockDesign d1" onClick={this.props.clockSelect}>00:00:00</div>
            <div className="clockDesign d2" onClick={this.props.clockSelect}>00:00:00</div>
            <div className="clockDesign d3" onClick={this.props.clockSelect}>00:00:00</div>
            <div className="clockDesign d4" onClick={this.props.clockSelect}>00:00:00</div>
            <div className="clockDesign d5" onClick={this.props.clockSelect}>00:00:00</div>
            </div>
            );
  }
}