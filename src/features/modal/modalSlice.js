import { createSlice } from '@reduxjs/toolkit';
import { getDefaultData, saveData } from '../../utils/localStorage';

const modalSlice = createSlice({
   name: 'modal',
   initialState: {
      isOpen: true,
      nickname: getDefaultData('nickname', 'Guest'),
      error: '',
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
      setError: (state, action) => {
         const { error } = action.payload;
         state.error = error;
      },
   },
});

export const { toggleModal, enterNickname, setError } = modalSlice.actions;

export default modalSlice.reducer;
