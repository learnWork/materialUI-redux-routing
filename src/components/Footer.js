import React from 'react'
import FilterLink from '../containers/FilterLink'
import { screenFilters } from '../actions'
import { RadioGroup, } from '@material-ui/core';

export default function Footer({filter, children}){
  const [value, setValue] = React.useState(filter);
  console.log("setValue",filter,value)
  return (
    <React.Fragment>
      <RadioGroup value={value} onChange={(event)=>{setValue(event.target.value);}} >
        <FilterLink filter={screenFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={screenFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={screenFilters.SHOW_COMPLETED}>Completed</FilterLink>
      </RadioGroup>
    </React.Fragment>
  );
}
