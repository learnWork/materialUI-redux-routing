import { combineReducers } from 'redux'
import { ADD_ITEM, TOGGLE_ITEM, SET_FILTER, screenFilters } from './actions'
const { SHOW_ALL } = screenFilters

function screenFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}

/*function items(state=[{
  text: 'action.text',
  completed: false
}],action){

  return state;
}*/
function items(state = [{ text: 'New Item',completed: false },
{ text: 'Completed Item', completed: true }], action) {
  switch (action.type) {
    case ADD_ITEM:
      console.log('add item',state,action)
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_ITEM:
      console.log('toggling item',state,action)
      return state.map((item, index) => {
        if (index === action.index) {
          return Object.assign({}, item, {
            completed: !item.completed
          })
        }
        return item
      })
    default:
      //console.log('initial',state,action)
      return state
  }
}

const listApp = combineReducers({
  screenFilter,
  items
})

export default listApp
