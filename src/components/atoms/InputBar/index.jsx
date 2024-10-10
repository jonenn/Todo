import ReactTextareaAutosize from 'react-textarea-autosize';
import './InputBar.css';
import { useDispatch } from 'react-redux';
import { addATodo } from '../../../features/todo/todoSlice';
import { enterNickname, setError } from '../../../features/modal/modalSlice';

const InputBar = ({ value, setValue, type, nav, validation }) => {
   const dispatch = useDispatch();

   const handleKeyDown = (eve) => {
      if (eve.key === 'Enter') {
         eve.preventDefault();
         const validate = type === 'approve' ? validation(value) : '';
         if (validate) {
            dispatch(setError({ error: validate }));
         } else {
            dispatch(setError({ error: '' }));
            type === 'approve'
               ? dispatch(enterNickname({ nickname: value }))
               : dispatch(addATodo({ addTodoValue: value, nav: nav }));
            setValue('');
         }
      }
   };

   const handleChange = (eve) => {
      setValue(eve.target.value);
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
      <>
         <input
            type="text"
            placeholder={type === 'search' ? 'Search...' : 'Your nickname'}
            className="input-bar"
            maxLength="200"
            value={value}
            onChange={(eve) => {
               handleChange(eve);
            }}
            onKeyDown={(eve) => {
               handleKeyDown(eve);
            }}
         />
      </>
   );
};

export { InputBar };
