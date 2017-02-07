import React from 'react';
import Clock from './clock';
import ClockList from './clockList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.clockSelect = this.clockSelect.bind(this);
    this.state = {
      classes: 'clock'
    }
  }
  clockSelect(e){
    console.log(e.target.className.split(' ')[1])
    this.setState({
      classes: 'clock ' + e.target.className.split(' ')[1]
    });
  }
  render () {
    return (
            <div className="app">
            <Clock classes={this.state.classes}/>
            <ClockList clockSelect={this.clockSelect}/>
            </div>);
  }
}