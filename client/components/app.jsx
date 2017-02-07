import React from 'react';
import Clock from './clock';
import ClockList from './clockList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.clockSelect = this.clockSelect.bind(this);
  }
  clockSelect(e){
    console.log(e.target.className)
  }
  render () {
    return (
            <div className="app">
            <Clock />
            <ClockList clockSelect={this.clockSelect}/>
            </div>);
  }
}