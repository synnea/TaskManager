import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import PomoTaskList from './components/PomoTasks/PomoTaskList';
import RegularTaskList from './components/RegularTasks/RegularTaskList';
import * as actions from './store/actions';

class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      value: '',
    };
  }

  componentDidUpdate() {
    console.log(this.props.regularTask);

  }

  onAddHandler = () => {
    const task = this.state.value;
    this.setState({value: ''});
    this.props.onAddedRegularTask(task);
  };


  onChangeInput = (event) => {
    this.setState({value: event.target.value});
  };

  render () {
    return (
      <div data-test="components-app" className="App">
        <h1>Today's Tasks</h1>
        <PomoTaskList data-test="component-pomotasklist" />
        <RegularTaskList add={this.onAddHandler} value={this.state.value} change={this.onChangeInput} data-test="component-regulartasklist"  />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    regularTask: state.regularTasks,
    regularTaskInputValue: state.regularTaskInputValue,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedRegularTask: (task) => dispatch(actions.addRegularTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
