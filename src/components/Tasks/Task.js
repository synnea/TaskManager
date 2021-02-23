
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import './Task.css';


const RegularTask = (props) => {

    useEffect(() => {
        console.log("props" + JSON.stringify(props));
      });
      
      return (
        <div className="task-card">

            {props.completed
                ? <li id={props.id} className="task completed">{props.description}</li>
                : props.taskInEditing ? <input value={props.editedValue} onChange={props.edit} /> 
                : <li id={props.id} className="task">{props.description}</li> }


            {!props.taskInEditing 
            ? <div>   <Button
                        endIcon={<DoneIcon />} 
                        onClick={() => props.complete(props.id)}>
                            Complete Task
                      </Button>

                      <Button 
                        endIcon={<DeleteIcon />}
                        onClick={() => props.delete(props.id)}>
                            Delete Task
                      </Button> 
                {props.completed 
                      ? null
                      : <Button 
                      endIcon={<EditIcon />}
                      onClick={() => props.editing(props.id)}>
                      Edit Task
                  </Button>  }   
               </div>
            :   <div><Button onClick={() => props.saveEdit(props)}>Save Edit</Button></div>
            }
        </div>
    )
}

export default RegularTask;