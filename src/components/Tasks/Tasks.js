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
          value: '',
          editedValue: '',
          taskInEditing: 0
        };
      }
    
      componentDidUpdate() {
        console.log("state" + JSON.stringify(this.state));
        if (this.props.clear) {
          let completedTasks = this.props.regularTasks.filter(task => {
            return task.completed === true
          });
          for (let task in completedTasks) {
            this.onDeleteHandler(completedTasks[task].id);
          };
          return this.onClearedHandler();
        }
      }
    
      onAddHandler = () => {
        const task = this.state.value;
        this.setState({value: ''});
        this.props.onAddedRegularTask(task);
      };
    
      onCompleteHandler = (id) => {
        this.props.completeAndCountTask(id);
      }

      onEditModeHandler = (id) => {
        console.log("in onEditMode" + id);
        this.setState({taskInEditing: id});
      }

      onEditChangeHandler = (event) => {
        this.setState({editedValue: event.target.value})
      }

      onEditCloseHandler = () => {
        console.log("in onEditClose");
        this.setState({taskInEditing: 0});
      }

      onEditSaveHandler = (props) => {
        console.log("props in savehander" + JSON.stringify({...props}));
        const task = { id: props.id,
                description: props.editedValue,
                completed: props.completed }
        this.props.onEditRegularTask(task);
        this.onEditCloseHandler();
      }

      onClearedHandler = () => {
        this.props.onClearedTasks();
      }
        
      onChangeInput = (event) => {
        if (event.key === 'Enter') {
          console.log("hit enter key");
        }
        this.setState({value: event.target.value});
      };

      onKeyPressHandler = event => {
        if (event.key === 'Enter') {
          this.onAddHandler();
        }
      }

      onDeleteHandler = (id) => {
        this.props.onDeleteRegularTask(id);
      };
 
    render () {    
        let tasks = (
            <div>
                {this.props.regularTasks.map(task => {
                  if (task.id === this.state.taskInEditing) {
                    return  <RegularTask
                        complete={this.onCompleteHandler}
                        delete={this.onDeleteHandler}
                        edit={this.onEditChangeHandler}
                        editing={this.onEditModeHandler}
                        saveEdit={this.onEditSaveHandler}
                        editedValue={this.state.editedValue}
                        taskInEditing={this.state.taskInEditing}
                        completed={task.completed}
                        key={task.id}
                        description={task.description}
                        id={task.id} />
                  } else {
                        return  <RegularTask
                        complete={this.onCompleteHandler}
                        delete={this.onDeleteHandler}
                        editing={this.onEditModeHandler}
                        completed={task.completed}
                        key={task.id}
                        description={task.description}
                        id={task.id} />
                  }
                })}
            </div> 
        );

        return (
            <div className="component-tasks">
                <Input keypress={this.onKeyPressHandler} change={this.onChangeInput} value={this.state.value} /> 
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
    onEditRegularTask: (id, description) => dispatch(actions.editRegularTask(id, description)),
    onClearedTasks: () => dispatch(actions.clearTasks()),
    completeAndCountTask: (id) => dispatch(actions.completeAndCountTask(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegularTasks);