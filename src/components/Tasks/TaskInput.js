import React from 'react';
import './TaskInput.css';

// const RegularTaskInput = (props) => {
//     return (
//     <div>
//         <input type="text" id="newRegularTask" onChange={props.change}  value={props.value} />
//         <Button onClick={props.add} variant="contained" color="primary">
//         Add Task
//         </Button>
//     </div>   
//     )

// }

const RegularTaskInput = (props) => {
        return (
        <div>
            <input type="text" 
                id="newRegularTask"
                placeholder="write down a task and hit enter!" 
                onChange={props.change}
                onKeyPress={props.keypress} 
                value={props.value} />
        </div>   
        )
    
    }
export default RegularTaskInput;