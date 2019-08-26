import React from 'react'
import PropTypes from 'prop-types'
import { List, } from '@material-ui/core';
import Item from './Item'

/*{...item} is another form of destructuring called Spread Attributes*/
export default function ItemList({ items, onItemClick })
{
  return(
    <React.Fragment>
      <List>
        {items.map((item, index) => (
          <Item key={index} {...item} onClick={() => onItemClick(index)} />
        ))}
      </List>
    </React.Fragment>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onItemClick: PropTypes.func.isRequired
}
