import editIcon from '../../../assets/edit.svg';

const Edit = () => {
   const handleClick = () => {
      console.log('edited!');
   };
   return (
      <div className="todo-card__icon">
         <img src={editIcon} alt="" onClick={() => handleClick()} />
      </div>
   );
};

export { Edit };
