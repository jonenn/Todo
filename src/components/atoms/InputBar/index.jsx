import ReactTextareaAutosize from 'react-textarea-autosize';
import './InputBar.css';
import { useDispatch } from 'react-redux';
import { addATask } from '../../../features/todo/todoSlice';

const InputBar = ({ value, setValue, type }) => {
   const dispatch = useDispatch();

   const handleKeyDown = (eve) => {
      if (eve.key === 'Enter') {
         eve.preventDefault();
         dispatch(addATask({ addTodoValue: value }));
         setValue('');
      }
   };
   return type === 'create' ? (
      <ReactTextareaAutosize
         type="text"
         placeholder="Add a Task"
         className="input-bar"
         maxLength="200"
         value={value}
         maxRows={7}
         onChange={(eve) => {
            setValue(eve.target.value);
         }}
         onKeyDown={(eve) => {
            handleKeyDown(eve);
         }}
      />
   ) : (
      <input
         type="text"
         placeholder="Search..."
         className="input-bar"
         maxLength="200"
         value={value}
         onChange={(eve) => {
            setValue(eve.target.value);
         }}
         onKeyDown={(eve) => {
            handleKeyDown(eve);
         }}
      />
   );
};

export { InputBar };
