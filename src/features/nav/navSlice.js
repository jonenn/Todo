import { createSlice } from '@reduxjs/toolkit';
import { defaultCategories } from '../../data/defaultNavs';

const initialState = {
   value: 'todo-app-jonenn',
   title: defaultCategories[0].title,
   index: 0,
   defaultCategories: defaultCategories,
};

export const counterSlice = createSlice({
   name: 'nav',
   initialState,
   reducers: {
      chooseNav: (state, action) => {
         const { nav, index } = action.payload;
         state.value = nav;
         state.index = index;
         state.title = defaultCategories[state.index].title;
         console.log(state.index);
      },
   },
});

export const { chooseNav } = counterSlice.actions;

export default counterSlice.reducer;
