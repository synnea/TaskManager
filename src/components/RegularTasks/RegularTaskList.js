import React from 'react';
import Input from './RegularTaskInput';

const RegularTaskList = (props) => {
    return (
        <div>
            <h3>RegularTaskList</h3>
            <Input add={props.add} change={props.change} />
        </div>
    )
};

export default RegularTaskList;