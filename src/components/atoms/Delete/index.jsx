import deleteIcon from '../../../assets/delete.svg';

const Delete = () => {
   const handleClick = () => {
      console.log('removed!');
   };
   return (
      <div className="todo-card__icon">
         <img src={deleteIcon} alt="" onClick={() => handleClick()} />
      </div>
   );
};

export { Delete };
