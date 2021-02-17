import React, { Component } from 'react';
import Input from './RegularTaskInput';
import RegularTask from './RegularTask';
import { connect } from 'react-redux';

class RegularTaskList extends Component {

    render () {        
        let tasks = (
            <div>
            {this.props.regularTasks.map(task => {
            return  <RegularTask
             key={task.id}
             description={task.description}
             id={task.id} />
            })}
            </div> 
        );

        return (
            <div>
                <h3>RegularTaskList</h3>
                <Input add={this.props.add} change={this.props.change} value={this.props.value} /> 
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
        regularTasks: state.regularTasks
      }
}

export default connect(mapStateToProps)(RegularTaskList);