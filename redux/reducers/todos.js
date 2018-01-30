  const makeTaskId = function() {
    return 'T0000' + Math.random().toString(36).substr(2, 5);
  }

  const initialTasks = [
      {
        id: makeTaskId(),
        text: 'Take the Taslky tour',
        complete: false
      },
      {
        id: makeTaskId(),
        text: 'Make your first todo',
        complete: false
      }
    ]

const tasks = (state = initialTasks, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: makeTaskId(),
          text: action.text,
          complete: false
        }
      ]
    case 'TOGGLE_TASK':
      return state.map(task => 
         (task.id === action.id) 
          ? {...task, complete: !task.complete}
          : task
      );
    default:
      return state;
  }
}

export default todos