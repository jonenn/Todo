import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/todoSlice';
import modalReducer from './modal/modalSlice';
import navReducer from './nav/navSlice';

const store = configureStore({
   reducer: {
      todos: todoReducer,
      modal: modalReducer,
      nav: navReducer,
   },
});

export { store };
