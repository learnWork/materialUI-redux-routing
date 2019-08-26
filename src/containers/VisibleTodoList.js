import { connect } from 'react-redux'
import { toggleItem } from '../actions'
import ItemList from '../components/ItemList'

const getVisibleItems = (items, filter) => {
  console.log("inside getVisibleItems", items)
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_COMPLETED':
      return items.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return items.filter(t => !t.completed)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: getVisibleItems(state.items, ownProps.filter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: id => {
      dispatch(toggleItem(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default VisibleTodoList
