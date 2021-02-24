
import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Chip from '@material-ui/core/Chip';


import './Task.css';


const RegularTask = (props) => {

    useEffect(() => {
        console.log("props" + JSON.stringify(props));
      });
      
      return (
        <div className="task-card">

            <div className="category-marker">
                <Chip className={props.category} label={props.category} />
            </div>

            {props.completed
                ? <div> 
                    
                    <li id={props.id} className="task completed">{props.description}</li>
                    <Button 
                        endIcon={<DeleteIcon />}
                        onClick={() => props.delete(props.id)}>
                            Clear Task
                      </Button> 
                </div>

                : props.taskInEditing ?
                
                <div>
                    
                    <input value={props.editedValue} onChange={props.edit} />
                    <div><Button onClick={() => props.saveEdit(props)}>Save Edit</Button></div>

                </div>
                : <div>
                    <li id={props.id} className="task">{props.description}</li>
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

                     <Button
                      endIcon={<EditIcon />}
                      onClick={() => props.editing(props)} >
                        Edit Task         
                    </Button>         
                </div> }
        </div>
    )
}

export default RegularTask;