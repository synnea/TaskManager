import React from 'react';
import Button from '@material-ui/core/Button';

const RegularTaskInput = (props) => {
    return (
    <div>
        <input type="text" id="newRegularTask" onChange={props.change} />
        <Button onClick={props.add} variant="contained" color="primary">
        Add Task
        </Button>
    </div>   
    )

}

export default RegularTaskInput;