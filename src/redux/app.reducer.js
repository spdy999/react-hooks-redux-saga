import todos from './data';

const appReducer = (state = todos, action) => {
  switch (action.type) {
    case 'ADD_TODO_SAGA':
      return [...state, ...action.payload];

    case 'DELETE_TODO_SAGA':
      const newTodos = state.filter((todo) => todo.id !== action.payload);
      return newTodos;

    default:
      return state;
  }
};

export default appReducer;
