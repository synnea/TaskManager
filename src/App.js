import './App.css';
import React, { Component } from 'react';
// import Container from '@material-ui/core/Container';
// import { withStyles } from '@material-ui/core/styles';

import RegularTasks from './components/Tasks/Tasks';
import AppBar from './components/Layout/AppBar';

class App extends Component {

  render () {
    let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/");

    return (
      <div className="app-container">
          <AppBar cleared={this.onClearHandler} />
          <div className="task-panel" data-test="components-app">
            <h1>Today's Tasks</h1>
            {date} / {month} / {year}
            <RegularTasks 
              data-test="component-regulartasklist"  />
          </div>
      </div>

    );
  }
}

export default App;
