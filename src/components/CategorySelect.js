import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CategorySelect = (props) => {
    const classes = useStyles();

        return (
            <FormControl className={classes.formControl}>
                <InputLabel id="category-select-label">{props.InputLabel}</InputLabel>
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
        )
    
    }


export default CategorySelect;