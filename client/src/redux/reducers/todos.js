const initialState = {
  todos: [],
  todo: {}
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };

    default:
      return state;
  }
};
export default todoReducer;
