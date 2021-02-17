import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import PomoTaskList from './components/PomoTasks/PomoTaskList';
import RegularTasks from './components/RegularTasks/RegularTasks';


class App extends Component {
 
  render () {
    return (
      <div data-test="components-app" className="App">
        <h1>Today's Tasks</h1>
        <PomoTaskList data-test="component-pomotasklist" />
        <RegularTasks 
          data-test="component-regulartasklist"  />
      </div>
    );
  }
}

export default App;
