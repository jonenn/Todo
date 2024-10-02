import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
   name: 'modal',
   initialState: {
      isOpen: true,
   },
   reducers: {
      toggleModal: (state, action) => {
         const { open } = action.payload;
         state.isOpen = open;
      },
   },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
