
import React from 'react';
import Button from '@material-ui/core/Button';

const RegularTask = (props) => {
    return (
        <div className="task">
            <li>{props.description}</li>
            <Button onClick={() => props.complete(props.id)}>Complete Task</Button>  
        </div>
    )
}

export default RegularTask;