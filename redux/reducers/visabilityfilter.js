const visabilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISABILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visabilityFilter