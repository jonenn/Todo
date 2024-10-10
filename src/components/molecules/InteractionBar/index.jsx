import { InputBar } from '../../atoms/InputBar';
import './InteractionBar.css';
import { Icon } from '../../atoms/Icon';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addATodo } from '../../../features/todo/todoSlice';
import { enterNickname, setError } from '../../../features/modal/modalSlice';

const InteractionBar = ({ type, value, setValue, className, error }) => {
   const [addTodoValue, setAddTodoValue] = useState('');
   const nav = useSelector((store) => {
      return store.nav.value;
   });

   const dispatch = useDispatch();

   const validatingNickname = (input) => {
      if (input.length < 3) {
         return 'Nickname should not be shorter than 3 characters';
      }
      if (input.length > 12) {
         return 'Nickname should not be longer than 12 characters';
      }
      if (!/^[A-Za-z0-9]+$/.test(input)) {
         return 'Nickname should not contain special characters.';
      }
      return '';
   };

   const handleClick = () => {
      const validate = type === 'approve' ? validatingNickname(value) : '';
      if (validate) {
         dispatch(setError({ error: validate }));
      } else {
         dispatch(setError({ error: '' }));
         type === 'approve'
            ? dispatch(enterNickname({ nickname: value }))
            : dispatch(addATodo({ addTodoValue: value, nav: nav }));
         setValue('');
      }
      setAddTodoValue('');
   };

   return (
      <div
         className={`interaction-bar ${className} ${
            error && 'interaction-bar--error'
         }`}
      >
         <InputBar
            value={type === 'create' ? addTodoValue : value}
            setValue={type === 'create' ? setAddTodoValue : setValue}
            type={type}
            nav={nav}
            validation={validatingNickname}
         />
         <button
            className={`interaction-bar__icon ${
               type === 'approve' ? 'interaction-bar__icon--approve' : ''
            }`}
            onClick={handleClick}
         >
            <Icon type={type} />
         </button>
      </div>
   );
};

export { InteractionBar };
