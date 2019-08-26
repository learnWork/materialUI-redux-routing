import React from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx';
import { Button, makeStyles, TextField  } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { addItem } from '../actions'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

let AddTodo = ({ dispatch }) => {
  const classes = useStyles();
  let input
  return (
    <div>
      <form onSubmit={e => { e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addItem(input.value))
          input.value = ''
        }}
      >
        <TextField id="outlined-full-width" label="Enter New List Item"
        style={{ margin: 8 }} placeholder="Type Here"
        helperText="Experiment!" variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        inputRef={node => { input = node }}
        />
        <Button variant="outlined" size="small" color="primary" className={classes.button} type="submit">
          <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
          Add Task
        </Button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
