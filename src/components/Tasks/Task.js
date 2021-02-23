
import React from 'react';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

import './Task.css';


const RegularTask = (props) => {
    return (
        <div className="task-card">
            {props.completed 
                ? <li id={props.id} className="task completed">{props.description}</li>
                : <li id={props.id} className="task">{props.description}</li> }
            <Button
                endIcon={<DoneIcon />} 
                onClick={() => props.complete(props.id)}>
                    Complete Task
            </Button>

            <Button 
                endIcon={<DeleteIcon />}
                onClick={() => props.delete(props.id)}>
                    Delete Task
            </Button>  

        </div>
    )
}

export default RegularTask;