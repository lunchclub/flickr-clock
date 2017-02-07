import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    }
  }
  componentWillMount () {
    setInterval( function() {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }.bind(this), 100);
  }
  render () {
    return <div className={this.props.classes}> {this.state.time}</div>;
  }
}