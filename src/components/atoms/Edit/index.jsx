import editIcon from '../../../assets/edit.svg';

const Edit = ({ onEdit, text }) => {
   const handleClick = () => {
      onEdit(text);
   };
   return (
      <>
         <div className="todo-card__icon">
            <img src={editIcon} alt="" onClick={() => handleClick()} />
         </div>
      </>
   );
};

export { Edit };
