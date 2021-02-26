import React from 'react';
import './TaskInput.css';

import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import CategorySelect from '../CategorySelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const RegularTaskInput = (props) => {
        const InputLabel = "Category";

        return (
        <div>
            <input type="text" 
                id="newRegularTask"
                placeholder="write down a task and select a category!" 
                onChange={props.change}
                onKeyPress={props.keypress} 
                value={props.value} 
            />

            <Button onClick={props.add}>Add Task</Button>

            <CategorySelect 
            category={props.category}
            InputLabel={InputLabel}
            selectCategory={props.selectCategory} />
        </div>   
        )
    
    }


export default RegularTaskInput;