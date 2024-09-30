import { createSlice } from '@reduxjs/toolkit';
import { defaultTodos } from '../../data/defaultTodos';

const initialState = {
   todoItems: defaultTodos,
   loading: true,
};

const todoSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      checkATodo: (state, action) => {
         const todos = state.todoItems;
         const { checkState, id } = action.payload;
         // console.log(action.payload.id);
         todos[id] = { ...todos[id], checked: checkState };
      },
      deleteATodo: (state, action) => {
         const todos = state.todoItems;
         const { id } = action.payload;
         todos.splice(id, 1);
      },
   },
});

// console.log(todoSlice);

export const { checkATodo, deleteATodo } = todoSlice.actions;
export default todoSlice.reducer;
