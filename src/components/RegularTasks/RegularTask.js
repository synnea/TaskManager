
import React from 'react';

const RegularTask = (props) => {
    return (
        <div className="task">
            <li>{props.description}</li>
        </div>      
    )
}

export default RegularTask;