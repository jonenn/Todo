import { useState } from 'react';
import { Checked } from '../../atoms/Checked';
import './TodoCard.css';
import { Edit } from '../../atoms/Edit';
import { Delete } from '../../atoms/Delete';

const TodoCard = ({ children, checked }) => {
   const [isChecked, setIsChecked] = useState(checked);

   const handleClick = (whenChecked) => {
      setIsChecked(whenChecked);
      console.log(whenChecked, 'parent');
   };

   return (
      <div
         className={`todo-card ${
            isChecked ? 'todo-card--checked' : 'todo-card--unchecked'
         }`}
      >
         <Checked onCheckChange={handleClick} checked={checked} />
         <div className="todo-card__content">
            <p
               className={`todo-card__name ${
                  isChecked
                     ? 'todo-card__name--checked'
                     : 'todo-card__name--unchecked'
               }`}
            >
               {children}
            </p>
            <div className="todo-card__icons">
               <Edit />
               <Delete />
            </div>
         </div>
      </div>
   );
};

export { TodoCard };
