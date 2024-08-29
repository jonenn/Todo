import deleteIcon from '../../../assets/delete.svg';

const Delete = () => {
   return (
      <div className="todo-card__icon">
         <img src={deleteIcon} alt="" />
      </div>
   );
};

export { Delete };
