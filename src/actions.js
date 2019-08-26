/*action types TODO==ITEM VISIBILITY==""*/
export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const SET_FILTER = 'SET_FILTER'

/*other constants*/
export const screenFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*action creators*/
export function addItem(text) {
  return { type: ADD_ITEM, text }
}

export function toggleItem(index) {
  return { type: TOGGLE_ITEM, index }
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter }
}
