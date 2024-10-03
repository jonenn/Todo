import { useDispatch } from 'react-redux';
import { Icon } from '../Icon';
import { editATodo } from '../../../features/todo/todoSlice';

const Edit = ({ id }) => {
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(editATodo({ id: id }));
   };
   return (
      <>
         <button className="todo-card__icon" onClick={handleClick}>
            <Icon type="edit" />
         </button>
      </>
   );
};

export { Edit };
