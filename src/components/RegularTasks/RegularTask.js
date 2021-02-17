
import React from 'react';
import Button from '@material-ui/core/Button';

const RegularTask = (props) => {
    return (
        <div className="task">
            <li>{props.description}: {props.completed}</li>
            <Button onClick={() => props.complete(props.id)}>Complete Task</Button>
            <Button onClick={() => props.delete(props.id)}>Delete Task</Button>    
        </div>
    )
}

export default RegularTask;