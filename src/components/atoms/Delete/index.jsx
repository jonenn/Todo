import { Icon } from '../Icon';

const Delete = ({ onDelete, text }) => {
   const handleClick = () => {
      onDelete(text);
   };
   return (
      <div className="todo-card__icon todo-card__icon--delete">
         <Icon type="delete" onClick={() => handleClick()} />
      </div>
   );
};

export { Delete };
