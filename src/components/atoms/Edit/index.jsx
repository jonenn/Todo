import { Icon } from '../Icon';

const Edit = ({ onEdit, text }) => {
   const handleClick = () => {
      onEdit(text);
   };
   return (
      <>
         <div className="todo-card__icon">
            <Icon type="edit" alt="" onClick={() => handleClick()} />
         </div>
      </>
   );
};

export { Edit };
