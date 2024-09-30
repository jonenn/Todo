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
         const { id, checkState } = action.payload;
         todos[id].checked = checkState;
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
      saveATodo: (state, action) => {
         const todos = state.todoItems;
         const { id, todoValue } = action.payload;
         todos[id].text = todoValue;
         state.editingId = null;
      },
      addATask: (state, action) => {
         let todos = state.todoItems;
         const { addTodoValue } = action.payload;
         if (addTodoValue.trim().length > 0) {
            todos.unshift({ text: addTodoValue, checked: false });
         }
      },
   },
});

export const { checkATodo, deleteATodo, editATodo, saveATodo, addATask } =
   todoSlice.actions;
export default todoSlice.reducer;
