import { InputBar } from '../../atoms/InputBar';
import './InteractionBar.css';
import { Icon } from '../../atoms/Icon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addATask } from '../../../features/todo/todoSlice';

const InteractionBar = ({
   placeholder,
   type,
   className,
   value,
   setValue,
   // addATodo,
}) => {
   const [addTodoValue, setAddTodoValue] = useState('');

   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(addATask({ addTodoValue: addTodoValue }));
      setAddTodoValue('');
   };

   return (
      <div className={`interaction-bar ${className}`}>
         <InputBar
            placeholder={placeholder}
            value={type === 'create' ? addTodoValue : value}
            setValue={type === 'create' ? setAddTodoValue : setValue}
            type={type}
            // addATodo={addATodo}
         />
         <button
            className={`interaction-bar__icon ${
               value ? 'interaction-bar__icon--active' : ''
            }`}
            onClick={handleClick}
         >
            <Icon type={type} />
         </button>
      </div>
   );
};

export { InteractionBar };
