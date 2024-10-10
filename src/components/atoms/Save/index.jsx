import { useDispatch } from 'react-redux';
import { Icon } from '../Icon';
import { saveATodo } from '../../../features/todo/todoSlice';

const Save = ({ id, value, nav }) => {
   const dispatch = useDispatch();
   const handleClick = () => {
      dispatch(saveATodo({ id: id, todoValue: value, nav: nav }));
   };
   return (
      <>
         <div
            className="todo-card__icon todo-card__icon--save"
            onClick={handleClick}
         >
            <Icon type="save" />
         </div>
      </>
   );
};

export { Save };
