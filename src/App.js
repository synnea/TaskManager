import './App.css';
import React, { Component } from 'react';
import PomoTaskList from './components/PomoTasks/PomoTaskList';
import RegularTaskList from './components/RegularTasks/RegularTaskList';

class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: '',
      regularTasks: []
    };
  }

  onAddTask = () => {

    // const newTask = document.getElementById('newRegularTask').value;
    
    // const updatedControls = state.regularTasks.concat(newTask);

    // console.log(updatedControls);

  }

  onChangeInput = (event) => {
    this.setState({value: event.target.value});
    console.log(this.state);
  }

  render () {
    return (
      <div data-test="components-app" className="App">
        <h1>Today's Tasks</h1>
        <PomoTaskList data-test="component-pomotasklist" />
        <RegularTaskList add={this.onAddTask} change={this.onChangeInput} data-test="component-regulartasklist"  />
      </div>
    );
  }
}

export default App;
