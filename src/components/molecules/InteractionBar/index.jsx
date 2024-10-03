import { InputBar } from '../../atoms/InputBar';
import './InteractionBar.css';
import { Icon } from '../../atoms/Icon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addATask } from '../../../features/todo/todoSlice';

const InteractionBar = ({ type, value, setValue, className }) => {
   const [addTodoValue, setAddTodoValue] = useState('');

   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(addATask({ addTodoValue: addTodoValue }));
      setAddTodoValue('');
   };

   return (
      <div className={`interaction-bar ${className}`}>
         <InputBar
            value={type === 'create' ? addTodoValue : value}
            setValue={type === 'create' ? setAddTodoValue : setValue}
            type={type}
         />
         <button
            className={`interaction-bar__icon ${
               value
                  ? 'interaction-bar__icon--active'
                  : type === 'approve'
                  ? 'interaction-bar__icon--approve'
                  : ''
            }`}
            onClick={handleClick}
         >
            <Icon type={type} />
         </button>
      </div>
   );
};

export { InteractionBar };
