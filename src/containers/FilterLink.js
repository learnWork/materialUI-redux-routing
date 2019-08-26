import React from 'react'
import { NavLink } from 'react-router-dom'
import { FormControlLabel, Radio } from '@material-ui/core';
import { screenFilters } from '../actions';

export default function FilterLink({ filter, children }){
  return(
  <React.Fragment>
    <NavLink exact to={filter === screenFilters.SHOW_ALL ? '/' : `/${filter}`}
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <FormControlLabel value={filter} control={<Radio />} label={children} />
    </NavLink>

  </React.Fragment>
  );
}
