import { Icon } from '../Icon';

const Save = ({ onSave, text }) => {
   const handleClick = () => {
      onSave();
      console.log('saved');
   };
   return (
      <>
         <div
            className="todo-card__icon todo-card__icon--save"
            onClick={handleClick}
         >
            <Icon type="save" />
         </div>
      </>
   );
};

export { Save };
