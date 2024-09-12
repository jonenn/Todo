import './Checked.css';
import checkIcon from '../../../assets/check.svg';
import { useState } from 'react';

const Checked = ({ onCheckChange, checked }) => {
   const [isCheckedChild, setIsCheckedChild] = useState(checked);
   const isItChecked = () => {
      const newCheckState = !isCheckedChild;
      setIsCheckedChild(newCheckState);
      onCheckChange(newCheckState);
      console.log(newCheckState);
   };
   return (
      <div
         className={`check ${
            isCheckedChild ? 'check--checked' : 'check--unchecked'
         } `}
         onClick={() => {
            isItChecked();
         }}
      >
         <img
            src={checkIcon}
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
