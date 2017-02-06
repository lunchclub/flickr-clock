import React from 'react';
import Clock from './clock';
import ClockList from './clockList';

export default class App extends React.Component {
  render () {
    return (
            <div className="app">
            <Clock />
            <ClockList />
            </div>);
  }
}