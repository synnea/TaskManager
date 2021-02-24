import React from 'react';
import './TaskInput.css';

import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

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
    const classes = useStyles();

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

            <FormControl className={classes.formControl}>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                labelId="category-select-label"
                id="categorySelect"
                value={props.category}
                onChange={props.selectCategory}
                >
                  <MenuItem value="work">Work</MenuItem>
                <MenuItem value="personal">Personal</MenuItem>
                </Select>
            </FormControl>
        </div>   
        )
    
    }


export default RegularTaskInput;