import ReactTextareaAutosize from 'react-textarea-autosize';
import './InputBar.css';

const InputBar = ({ placeholder, value, setValue, addATodo, type }) => {
   const handleKeyDown = (eve) => {
      if (eve.key === 'Enter') {
         eve.preventDefault();
         addATodo();
         setValue('');
      }
   };
   return type === 'create' ? (
      <ReactTextareaAutosize
         type="text"
         placeholder={placeholder}
         className="input-bar"
         maxLength="200"
         value={value}
         maxRows={7}
         onChange={(eve) => {
            setValue(eve.target.value);
         }}
         onKeyDown={(eve) => {
            handleKeyDown(eve);
         }}
      />
   ) : (
      <input
         type="text"
         placeholder={placeholder}
         className="input-bar"
         maxLength="200"
         value={value}
         // maxRows={type === 'search' ? 1 : 7}
         onChange={(eve) => {
            setValue(eve.target.value);
         }}
         onKeyDown={(eve) => {
            handleKeyDown(eve);
         }}
      />
   );
};

export { InputBar };
