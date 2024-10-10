import { useDispatch } from 'react-redux';
import { Icon } from '../Icon';
import { editATodo } from '../../../features/todo/todoSlice';

const Edit = ({ id, nav }) => {
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(editATodo({ id: id, nav: nav }));
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
