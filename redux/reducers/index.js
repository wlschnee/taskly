import { combineReducers } from 'redux'
import todos from './todos'
import visabilityFilter from './visabilityfilter'

const tasklyReducers = combineReducers({
  todos,
  visabilityFilter
})

export default tasklyReducers