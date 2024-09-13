import deleteIcon from '../../../assets/delete.svg';

const Delete = ({ onDelete, text }) => {
   const handleClick = () => {
      onDelete(text);
   };
   return (
      <div className="todo-card__icon">
         <img src={deleteIcon} alt="" onClick={() => handleClick()} />
      </div>
   );
};

export { Delete };
