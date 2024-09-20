import './InputBar.css';

const InputBar = ({ placeholder, value, setValue, addATodo }) => {
   const handleKeyDown = (eve) => {
      if (eve.key === 'Enter') {
         addATodo();
         setValue('');
      }
   };
   return (
      <input
         type="text"
         placeholder={placeholder}
         className="input-bar"
         maxLength="200"
         value={value}
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
