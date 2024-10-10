import './Checked.css';
import { Icon } from '../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { checkATodo } from '../../../features/todo/todoSlice.js';

const Checked = ({ id }) => {
   const isChecked = useSelector((state) => {
      return state.todos.todoItems[id].checked;
   });

   const chosenNav = useSelector((state) => {
      return state.nav.value;
   });

   const isItChecked = () => {
      const newCheckState = !isChecked;
      dispatch(
         checkATodo({ id: id, checkState: newCheckState, nav: chosenNav })
      );
   };

   const dispatch = useDispatch();
   return (
      <button
         className={`check check${isChecked ? '--checked' : '--unchecked'} `}
         onClick={isItChecked}
      >
         <Icon
            type="check"
            className={`check__image check__image${
               isChecked ? '--checked' : '--unchecked'
            }`}
         />
      </button>
   );
};

export { Checked };
