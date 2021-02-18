import './App.css';
import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

import RegularTasks from './components/Tasks/Tasks';
import AppBar from './components/Layout/AppBar';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    textAlign: 'center',
    border: 0,
    marginTop: 200,
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

class App extends Component {

  render () {
    let [month, date, year]    = new Date().toLocaleDateString("en-US").split("/");

    return (
      <Container class="app-container">
      <AppBar cleared={this.onClearHandler} />
          <Container maxWidth="md" className="App" data-test="components-app" style={styles.root}>
            <h1>Today's Tasks</h1>
            {date} / {month} / {year}
            <RegularTasks 
              data-test="component-regulartasklist"  />
          </Container>
      </Container>

    );
  }
}

export default App;
