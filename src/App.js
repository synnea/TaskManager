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

  componentDidUpdate() {
    console.log(this.state);

  }

  onAddTask = () => {
    this.setState(state => {
      const regularTasks = state.regularTasks.concat(state.value);
 
      return {
        regularTasks,
        value: '',
      };
    });
  };


  onChangeInput = (event) => {
    this.setState({value: event.target.value});
    console.log(this.state);
  };

  render () {
    return (
      <div data-test="components-app" className="App">
        <h1>Today's Tasks</h1>
        <PomoTaskList data-test="component-pomotasklist" />
        <RegularTaskList add={this.onAddTask} value={this.state.value} change={this.onChangeInput} data-test="component-regulartasklist"  />
      </div>
    );
  }
}

export default App;
