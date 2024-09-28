import { createSlice } from '@reduxjs/toolkit';
import { defaultTodos } from '../../data/defaultTodos';

const initialState = {
   defaultTodos,
   loading: true,
};

const todoSlice = createSlice({
   name: 'todo',
   initialState,
});

console.log(todoSlice);

export default todoSlice.reducer;
