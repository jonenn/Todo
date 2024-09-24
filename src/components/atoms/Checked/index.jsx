import './Checked.css';
import { useState } from 'react';
import { Icon } from '../Icon';

const Checked = ({ onCheckChange, checked, onComplete, text }) => {
   const [isCheckedChild, setIsCheckedChild] = useState(checked);
   const isItChecked = () => {
      const newCheckState = !isCheckedChild;
      setIsCheckedChild(newCheckState);
      onCheckChange(newCheckState);
      onComplete(text, newCheckState);
   };
   return (
      <button
         className={`check check${
            isCheckedChild ? '--checked' : '--unchecked'
         } `}
         onClick={isItChecked}
      >
         <Icon
            type="check"
            className={`check__image check__image${
               isCheckedChild ? '--checked' : '--unchecked'
            }`}
         />
      </button>
   );
};

export { Checked };
