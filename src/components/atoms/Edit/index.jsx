import { Icon } from '../Icon';

const Edit = ({ onEdit, text }) => {
   const handleClick = () => {
      onEdit(text);
   };
   return (
      <>
         <button className="todo-card__icon" onClick={handleClick}>
            <Icon type="edit" alt="" />
         </button>
      </>
   );
};

export { Edit };
