import './InputBar.css';

const InputBar = ({ placeholder, searchValue, setSearchValue }) => {
   return (
      <input
         type="text"
         placeholder={placeholder}
         className="input-bar"
         value={searchValue}
         onChange={(eve) => {
            setSearchValue(eve.target.value);
         }}
      />
   );
};

export { InputBar };
