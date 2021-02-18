import React, { Component } from 'react';
import Input from './TaskInput';
import RegularTask from './Task';
import DataTracker from '../DataTracker';
import * as actions from '../../store/actions';

import { connect } from 'react-redux';

class RegularTasks extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          value: ''
        };
      }
    
      componentDidUpdate() {
        if (this.props.clear) {
          let completedTasks = this.props.regularTasks.filter(task => {
            return task.completed === true
          });
          for (let task in completedTasks) {
            this.onDeleteHandler(completedTasks[task].id);
          };
          this.onClearedHandler();
        }
      }
    
      onAddHandler = () => {
        const task = this.state.value;
        this.setState({value: ''});
        this.props.onAddedRegularTask(task);
      };
    
      // onCompleteHandler = (id) => {
      //   this.setState({completed: this.state.completed + 1})
      //   this.props.onCompletedRegularTask(id);
      // }

      onCompleteHandler = (id) => {
        console.log("in new onCompleteHandler");
        this.props.completeAndCountTask(id);
      }

      onClearedHandler = () => {
        this.props.onClearedTasks();
      }
    
    
      onChangeInput = (event) => {
        this.setState({value: event.target.value});
      };

      onDeleteHandler = (id) => {
        console.log("hello from ondelete");
        this.props.onDeleteRegularTask(id);
      };
 
    render () {        
        let tasks = (
            <div>
                {this.props.regularTasks.map(task => {
                return  <RegularTask
                complete={this.onCompleteHandler}
                delete={this.onDeleteHandler}
                completed={task.completed}
                key={task.id}
                description={task.description}
                id={task.id} />
                })}
            </div> 
        );

        return (
            <div className="component-tasks">
                <Input add={this.onAddHandler} change={this.onChangeInput} value={this.state.value} /> 
                {tasks}  
                <DataTracker completed={this.state.completed} /> 
            </div>
        )
    }
};


const mapStateToProps = state => {
    return {
        regularTasks: state.regularTasks,
        clear: state.clear
      }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddedRegularTask: (task) => dispatch(actions.addRegularTask(task)),
    onCompletedRegularTask: (id) => dispatch(actions.completeRegularTask(id)),
    onDeleteRegularTask: (id) => dispatch(actions.deleteRegularTask(id)),
    onClearedTasks: () => dispatch(actions.clearTasks),
    completeAndCountTask: (id) => dispatch(actions.completeAndCountTask(id))
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegularTasks);