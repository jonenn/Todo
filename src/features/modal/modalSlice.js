import { createSlice } from '@reduxjs/toolkit';
import { getDefaultData, saveData } from '../../utils/localStorage';

const modalSlice = createSlice({
   name: 'modal',
   initialState: {
      isOpen: true,
      nickname: getDefaultData('nickname', 'Guest'),
   },
   reducers: {
      toggleModal: (state, action) => {
         const { open } = action.payload;
         state.isOpen = open;
      },
      enterNickname: (state, action) => {
         const { nickname } = action.payload;
         state.nickname = nickname;
         saveData('nickname', nickname);
         state.isOpen = false;
      },
   },
});

export const { toggleModal, enterNickname } = modalSlice.actions;

export default modalSlice.reducer;
