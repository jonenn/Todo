// import saveIcon from '../../../assets/save.svg';

import { Icon } from '../Icon';

const Save = ({ onSave, text }) => {
   const handleClick = () => {
      onSave();
      console.log('saved');
   };
   return (
      <>
         <div className="todo-card__icon todo-card__icon--save">
            <Icon type="save" onClick={() => handleClick()} />
         </div>
      </>
   );
};

export { Save };
