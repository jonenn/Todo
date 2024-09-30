import { useDispatch } from 'react-redux';
import { Icon } from '../Icon';
import { deleteATodo } from '../../../features/todo/todoSlice';

const Delete = ({ id }) => {
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(deleteATodo({ id: id }));
   };
   return (
      <button
         className="todo-card__icon todo-card__icon--delete"
         onClick={handleClick}
      >
         <Icon type="delete" />
      </button>
   );
};

export { Delete };
