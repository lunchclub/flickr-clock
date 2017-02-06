import React from 'react';

export default class CLockList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount () {
  }
  render () {
    return (

            <div className="clockList">
            <div className="clockDesign d1">00:00:00</div>
            <div className="clockDesign d2">00:00:00</div>
            <div className="clockDesign d3">00:00:00</div>
            <div className="clockDesign d4">00:00:00</div>
            <div className="clockDesign d5">00:00:00</div>
            </div>
            );
  }
}