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
         const { id, checkState, nav } = action.payload;
         todos[id].checked = checkState;
         saveData(nav, todos);
      },
      deleteATodo: (state, action) => {
         const todos = state.todoItems;
         const { id, nav } = action.payload;
         todos.splice(id, 1);
         saveData(nav, todos);
         state.editingId = null;
      },
      editATodo: (state, action) => {
         state.editingId = action.payload.id;
         console.log(action.payload.id);
      },
      saveATodo: (state, action) => {
         const todos = state.todoItems;
         const { id, todoValue, nav } = action.payload;
         if (todoValue.trim().length > 0) {
            todos[id].text = todoValue;
            saveData(nav, todos);
            state.editingId = null;
         }
      },
      addATodo: (state, action) => {
         let todos = state.todoItems;
         const { addTodoValue, nav } = action.payload;
         if (addTodoValue.trim().length > 0) {
            todos.unshift({
               id: Date.now(),
               text: addTodoValue,
               checked: false,
            });
            saveData(nav, todos);
         }
      },
      loadTodos: (state, action) => {
         let newTodos = action.payload.todos;
         console.log();
         state.todoItems = getDefaultData(newTodos, []);
      },
   },
});

export const {
   checkATodo,
   deleteATodo,
   editATodo,
   saveATodo,
   addATodo,
   loadTodos,
} = todoSlice.actions;
export default todoSlice.reducer;
