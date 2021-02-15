import './App.css';
import React, { Component } from 'react';
import PomoTaskList from './components/PomoTasks/PomoTaskList';
import RegularTaskList from './components/RegularTasks/RegularTaskList';

class App extends Component {
  render () {
    return (
      <div data-test="components-app" className="App">
        <h1>Today's Tasks</h1>
        <PomoTaskList data-test="component-pomotasklist" />
        <RegularTaskList data-test="component-regulartasklist"  />
      </div>
    );
  }
}

export default App;
