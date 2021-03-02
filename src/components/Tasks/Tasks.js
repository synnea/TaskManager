import React, { Component } from 'react';
import Input from './TaskInput';
import RegularTask from './Task';
import DataTracker from '../DataTracker';
import CategoryFilter from '../CategoryFilter';
import * as actions from '../../store/actions';

import { connect } from 'react-redux';
import './Tasks.css';

class RegularTasks extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          value: '',
          editedValue: '',
          taskInEditing: 0,
          selectedCategory: 'work',
          filteredCategory: ''
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
          return this.onClearedHandler();
        }
      }

      onAddHandler = () => {
        const task = {
          description: this.state.value,
          category: this.state.selectedCategory }

        this.setState({value: ''});
        this.props.onAddedRegularTask(task);
      };

      onSelectedCategoryHandler = (event) => {
        this.setState({selectedCategory: event.target.value});
      }
    
      onCompleteHandler = (id) => {
        this.props.completeAndCountTask(id);
      }

      onEditModeHandler = (props) => {
        this.setState({editedValue: props.description})
        this.setState({taskInEditing: props.id});
      }

      onEditChangeHandler = (event) => {
        this.setState({editedValue: event.target.value})
      }

      onEditCloseHandler = () => {
        this.setState({taskInEditing: 0});
      }

      onEditSaveHandler = (props) => {
        this.setState({editedValue: ''});
        const task = { id: props.id,
                description: props.editedValue,
                category: props.category,
                completed: props.completed }
        this.props.onEditRegularTask(task);
        this.onEditCloseHandler();
      }

      onClearedHandler = () => {
        this.props.onClearedTasks();
      }
        
      onChangeInput = (event) => {
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

      onFilterSetHandler = (event) => {
        this.setState({filteredCategory: event.target.value});
      };

      onFilterRemoveHandler = () => {
        console.log("inside FilterRemoveHandler");
        this.setState({filteredCategory: ''});
      }

 
    render () {    
        let tasks = <div id="emptyTaskList"><p>There are no tasks here!! Try adding some.</p></div>

        if (this.props.regularTasks.length > 0 && !this.state.filteredCategory ) {
          tasks =  (
            <div>
                {this.props.regularTasks.map(task => {
                  if (task.id === this.state.taskInEditing) {
                    return  <RegularTask
                        complete={this.onCompleteHandler}
                        delete={this.onDeleteHandler}
                        edit={this.onEditChangeHandler}
                        saveEdit={this.onEditSaveHandler}
                        editedValue={this.state.editedValue}
                        taskInEditing={this.state.taskInEditing}
                        completed={task.completed}
                        key={task.id}
                        category={task.category}
                        description={task.description}
                        id={task.id} />
                  } else {
                        return  <RegularTask
                        complete={this.onCompleteHandler}
                        delete={this.onDeleteHandler}
                        editing={this.onEditModeHandler}
                        category={task.category}
                        completed={task.completed}
                        key={task.id}
                        description={task.description}
                        id={task.id} />
                  }
                })}
            </div> 
          );
        } else if (this.props.regularTasks.length > 0 && this.state.filteredCategory ) {
          tasks =  (
            <div>
                {this.props.regularTasks
                  .filter(task => task.category === this.state.filteredCategory)
                  .map(task => {
                    if (task.id === this.state.taskInEditing) {
                      return  <RegularTask
                          complete={this.onCompleteHandler}
                          delete={this.onDeleteHandler}
                          edit={this.onEditChangeHandler}
                          saveEdit={this.onEditSaveHandler}
                          editedValue={this.state.editedValue}
                          taskInEditing={this.state.taskInEditing}
                          completed={task.completed}
                          key={task.id}
                          category={task.category}
                          description={task.description}
                          id={task.id} />
                    } else {
                          return  <RegularTask
                          complete={this.onCompleteHandler}
                          delete={this.onDeleteHandler}
                          editing={this.onEditModeHandler}
                          category={task.category}
                          completed={task.completed}
                          key={task.id}
                          description={task.description}
                          id={task.id} />
                    }
                })}
            </div> 
          );
        }
  
      
        return (
         
            <div className="component-tasks">

                <Input keypress={this.onKeyPressHandler} 
                      change={this.onChangeInput} 
                      value={this.state.value}
                      category={this.state.selectedCategory}
                      add={this.onAddHandler} 
                      selectCategory={this.onSelectedCategoryHandler} /> 
                {tasks}
                <CategoryFilter 
                      filter={this.onFilterSetHandler} 
                      removeFilter={this.onFilterRemoveHandler} />  
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