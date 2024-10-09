import { createSlice } from '@reduxjs/toolkit';
import { defaultTodos } from '../../data/defaultTodos';
import { getDefaultData, saveData } from '../../utils/localStorage';

const initialState = {
   todoItems: getDefaultData('todo-app-jonenn', defaultTodos),
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
         saveData('todo-app-jonenn', todos);
      },
      deleteATodo: (state, action) => {
         const todos = state.todoItems;
         const { id } = action.payload;
         todos.splice(id, 1);
         saveData('todo-app-jonenn', todos);
         state.editingId = null;
      },
      editATodo: (state, action) => {
         state.editingId = action.payload.id;
         console.log(action.payload.id);
      },
      saveATodo: (state, action) => {
         const todos = state.todoItems;
         const { id, todoValue } = action.payload;
         todos[id].text = todoValue;
         saveData('todo-app-jonenn', todos);
         state.editingId = null;
      },
      addATodo: (state, action) => {
         let todos = state.todoItems;
         const { addTodoValue } = action.payload;
         if (addTodoValue.trim().length > 0) {
            todos.unshift({
               id: Date.now(),
               text: addTodoValue,
               checked: false,
            });
            saveData('todo-app-jonenn', todos);
         }
      },
   },
});

export const { checkATodo, deleteATodo, editATodo, saveATodo, addATodo } =
   todoSlice.actions;
export default todoSlice.reducer;
