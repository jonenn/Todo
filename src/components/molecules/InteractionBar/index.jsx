import { InputBar } from '../../atoms/InputBar';
import searchIcon from '../../../assets/search.svg';
import createIcon from '../../../assets/plus.svg';
import './InteractionBar.css';
import CheckIcon from '../../atoms/CheckIcon';

const InteractionBar = ({
   placeholder,
   type,
   className,
   searchValue,
   setSearchValue,
}) => {
   const barTypes = [
      {
         type: 'search',
         icon: <img src={searchIcon} alt="" />,
      },
      {
         type: 'create',
         icon: <img src={createIcon} alt="" />,
      },
      {
         type: 'confirm',
         icon: <CheckIcon />,
      },
   ];

   const icon = barTypes.find((item) => item.type === type);
   return (
      <div className={`interaction-bar ${className}`}>
         <InputBar
            placeholder={placeholder}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
         />
         {icon && icon.icon}
      </div>
   );
};

export { InteractionBar };
