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
         <Icon type={type} />
      </div>
   );
};

export { InteractionBar };
