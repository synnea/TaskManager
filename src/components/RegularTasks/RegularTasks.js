import React, { Component } from 'react';
import Input from './RegularTaskInput';
import RegularTask from './RegularTask';
import * as actions from '../../store/actions';

import { connect } from 'react-redux';

class RegularTaskList extends Component {
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
    
      onCompleteHandler = (id) => {
        this.props.onCompletedRegularTask(id);
      }
    
    
      onChangeInput = (event) => {
        this.setState({value: event.target.value});
      };
    

    render () {        
        let tasks = (
            <div>
            {this.props.regularTasks.map(task => {
            return  <RegularTask
             complete={this.onCompleteHandler}
             key={task.id}
             description={task.description}
             id={task.id} />
            })}
            </div> 
        );

        return (
            <div>
                <h3>RegularTaskList</h3>
                <Input add={this.onAddHandler} change={this.onChangeInput} value={this.state.value} /> 
                {tasks}   
            </div>
        )
    }

    componentDidUpdate() {
        console.log(this.tasks)
    }
};


const mapStateToProps = state => {
    return {
        regularTasks: state.regularTasks,
        regularTaskInputValue: state.regularTaskInputValue,
      }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddedRegularTask: (task) => dispatch(actions.addRegularTask(task)),
    onCompletedRegularTask: (id) => dispatch(actions.completeRegularTask(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegularTaskList);