import { InputBar } from '../../atoms/InputBar';
import './InteractionBar.css';
import { Icon } from '../../atoms/Icon';

const InteractionBar = ({
   placeholder,
   type,
   className,
   value,
   setValue,
   addATodo,
}) => {
   return (
      <div className={`interaction-bar ${className}`}>
         <InputBar
            placeholder={placeholder}
            value={value}
            setValue={setValue}
            type={type}
            addATodo={addATodo}
         />
         <button
            className={`interaction-bar__icon ${
               value ? 'interaction-bar__icon--active' : ''
            }`}
            onClick={addATodo}
         >
            <Icon type={type} />
         </button>
      </div>
   );
};

export { InteractionBar };
