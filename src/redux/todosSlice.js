import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      description: "Learn Redux",
      isDone: false
    },
    {
      id: 2,
      description: "Build a Todo App",
      isDone: true
    },
    {
      id: 3,
      description: "Master React Hooks",
      isDone: false
    }
  ],
  filter: 'all' // 'all', 'done', 'not'
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(), // Simple ID generation
        description: action.payload,
        isDone: false
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, description } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.description = description;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, toggleTodo, deleteTodo, editTodo, setFilter } = todosSlice.actions;

// Selectors
export const selectTodos = (state) => state.todos.todos;
export const selectFilter = (state) => state.todos.filter;

export default todosSlice.reducer;
