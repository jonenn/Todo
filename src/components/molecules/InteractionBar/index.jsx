import { InputBar } from '../../atoms/InputBar';
import './InteractionBar.css';
import { Icon } from '../../atoms/Icon';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addATodo } from '../../../features/todo/todoSlice';

const InteractionBar = ({ type, value, setValue, className, error }) => {
   const [addTodoValue, setAddTodoValue] = useState('');
   const nav = useSelector((store) => {
      return store.nav.value;
   });

   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(addATodo({ addTodoValue: addTodoValue, nav: nav }));
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
