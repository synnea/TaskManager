import React from 'react';
import CategorySelect from './CategorySelect';
import Button from '@material-ui/core/Button';

import './CategoryFilter.css';

const CategoryFilter = (props) => {

    return (
    <div className="filter-box">
        <CategorySelect
        selectCategory={props.filter}
        InputLabel="Select Filter" />
        <Button onClick={props.removeFilter}>Remove Filter</Button>
     </div>
     )
}

export default CategoryFilter;