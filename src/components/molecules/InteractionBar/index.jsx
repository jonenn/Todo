import { InputBar } from '../../atoms/InputBar';
import searchIcon from '../../../assets/search.svg';
import createIcon from '../../../assets/plus.svg';
import confirmIcon from '../../../assets/check2.svg';
import './InteractionBar.css';

const InteractionBar = ({ placeholder, type }) => {
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
         icon: <img src={confirmIcon} alt="" />,
      },
   ];

   const icon = barTypes.find((item) => item.type === type);
   return (
      <div className="interaction-bar">
         <InputBar placeholder={placeholder} />
         {icon && icon.icon}
      </div>
   );
};

export { InteractionBar };
