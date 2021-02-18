
import React from 'react';
import Button from '@material-ui/core/Button';
import './Task.css';


const RegularTask = (props) => {
    return (
        <div>
            {props.completed 
                ? <li id={props.id} className="task completed">{props.description}</li>
                : <li id={props.id} className="task">{props.description}</li> }
            <Button onClick={() => props.complete(props.id)}>Complete Task</Button>
            <Button onClick={() => props.delete(props.id)}>Delete Task</Button>    
        </div>
    )
}

export default RegularTask;