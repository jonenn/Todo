import { createSlice } from '@reduxjs/toolkit';
import { defaultTodos } from '../../data/defaultTodos';

const initialState = {
   todoItems: defaultTodos,
   editingId: null,
   loading: true,
};

const todoSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      checkATodo: (state, action) => {
         const todos = state.todoItems;
         const { checkState, id } = action.payload;
         todos[id] = { ...todos[id], checked: checkState };
      },
      deleteATodo: (state, action) => {
         const todos = state.todoItems;
         const { id } = action.payload;
         todos.splice(id, 1);
      },
      editATodo: (state, action) => {
         state.editingId = action.payload.id;
         console.log(action.payload.id);
      },
   },
});

// console.log(todoSlice);

export const { checkATodo, deleteATodo, editATodo } = todoSlice.actions;
export default todoSlice.reducer;
