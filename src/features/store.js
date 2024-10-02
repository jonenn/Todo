import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/todoSlice';
import modalReducer from './modal/modalSlice';

const store = configureStore({
   reducer: {
      todos: todoReducer,
      modal: modalReducer,
   },
});

export { store };
