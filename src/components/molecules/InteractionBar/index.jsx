import { InputBar } from '../../atoms/InputBar';
import './InteractionBar.css';
import { Icon } from '../../atoms/Icon';

const InteractionBar = ({
   placeholder,
   type,
   className,
   searchValue,
   setSearchValue,
}) => {
   return (
      <div className={`interaction-bar ${className}`}>
         <InputBar
            placeholder={placeholder}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
         />
         <Icon type={type} />
      </div>
   );
};

export { InteractionBar };
