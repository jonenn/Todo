import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
   name: 'modal',
   initialState: {
      isOpen: true,
      nickname: '',
   },
   reducers: {
      toggleModal: (state, action) => {
         const { open } = action.payload;
         state.isOpen = open;
      },
      enterNickname: (state, action) => {
         const { nickname } = action.payload;
         state.nickname = nickname;
      },
   },
});

export const { toggleModal, enterNickname } = modalSlice.actions;

export default modalSlice.reducer;
