import './Checked.css';
import { useState } from 'react';
import { Icon } from '../Icon';
import { useDispatch } from 'react-redux';
import { checkATodo } from '../../../features/todo/todoSlice.js';

const Checked = ({ onCheckChange, checked, onComplete, text, id }) => {
   const [isChecked, setIsChecked] = useState(checked);

   const isItChecked = () => {
      const newCheckState = !isChecked;
      setIsChecked(newCheckState);
      dispatch(checkATodo({ id: id, checkState: newCheckState }));
      // onCheckChange(newCheckState);
      // onComplete(text, newCheckState);
   };

   const dispatch = useDispatch();
   return (
      <button
         className={`check check${isChecked ? '--checked' : '--unchecked'} `}
         onClick={isItChecked}
      >
         <Icon
            type="check"
            className={`check__image check__image${
               isChecked ? '--checked' : '--unchecked'
            }`}
         />
      </button>
   );
};

export { Checked };
