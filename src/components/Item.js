import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemIcon, ListItemText, } from '@material-ui/core';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

/*destructuring to use props as individual variables*/
export default function Item({ onClick, completed, text }){
  return(
    <React.Fragment>
      <ListItem button onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
        <ListItemIcon> <StarRoundedIcon color={completed ? "" : "primary"} /> </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </React.Fragment>
  );
}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
