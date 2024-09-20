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
         <div
            className={`interaction-bar__icon interaction-bar__icon--${
               value ? 'active' : ''
            }`}
            onClick={() => {
               addATodo();
            }}
         >
            <Icon type={type} />
         </div>
      </div>
   );
};

export { InteractionBar };
