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
      <div
         className={`check ${
            isCheckedChild ? 'check--checked' : 'check--unchecked'
         } `}
         onClick={() => isItChecked()}
      >
         <Icon
            type="check"
            className={`check__image ${
               isCheckedChild
                  ? 'check__image--checked'
                  : 'check__image--unchecked'
            }`}
         />
      </div>
   );
};

export { Checked };
