import { useState } from 'react';
import { Checked } from '../../atoms/Checked';
import './TodoCard.css';

const TodoCard = () => {
   const [isChecked, setIsChecked] = useState(false);

   const handleClick = (whenChecked) => {
      setIsChecked(whenChecked);
      console.log(whenChecked, 'parent');
   };

   return (
      <div className="todo-card">
         <Checked onCheckChange={handleClick} />
         <p
            className={`todo-card__name ${
               isChecked
                  ? 'todo-card__name--checked'
                  : 'todo-card__name--unchecked'
            }`}
         >
            Lorem Ipsum
         </p>
      </div>
   );
};

export { TodoCard };
