import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   value: 'todo-app-jonenn',
};

export const counterSlice = createSlice({
   name: 'nav',
   initialState,
   reducers: {
      chooseNav: (state, action) => {
         const { nav } = action.payload;
         state.value = nav;
      },
   },
});

export const { chooseNav } = counterSlice.actions;

export default counterSlice.reducer;
