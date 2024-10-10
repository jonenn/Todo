import { useState } from 'react';
import { Checked } from '../../atoms/Checked';
import './TodoCard.css';
import { Edit } from '../../atoms/Edit';
import { Delete } from '../../atoms/Delete';
import TextareaAutosize from 'react-textarea-autosize';
import { Save } from '../../atoms/Save';
import { useDispatch, useSelector } from 'react-redux';
import { saveATodo } from '../../../features/todo/todoSlice';
import { Paragraph } from '../../atoms/Paragraph';

const TodoCard = ({ children, text, todos, id }) => {
   const todoIndex = todos.findIndex((todo) => {
      return todo.id === id;
   });

   const { todoItems, editingId } = useSelector((state) => {
      return state.todos;
   });

   const chosenNav = useSelector((state) => {
      return state.nav.value;
   });

   const [todoValue, setTodoValue] = useState(children);
   const isChecked = todoItems[todoIndex].checked;

   const dispatch = useDispatch();

   const handleKeyDown = (eve) => {
      if (eve.key === 'Enter') {
         eve.preventDefault();
         dispatch(
            saveATodo({ id: todoIndex, todoValue: todoValue, nav: chosenNav })
         );
      }
   };

   const editValue = (eve) => {
      setTodoValue(eve.target.value);
   };

   return (
      <div
         className={`todo-card todo-card${
            isChecked ? '--checked' : '--unchecked'
         }`}
      >
         <Checked text={text} id={todoIndex} />
         <div className="todo-card__content">
            {editingId === todoIndex ? (
               <TextareaAutosize
                  className="todo-card__input"
                  value={todoValue}
                  onChange={editValue}
                  maxRows={7}
                  maxLength="200"
                  onKeyDown={handleKeyDown}
               />
            ) : (
               <Paragraph
                  className={`todo-card__name todo-card__name${
                     isChecked ? '--checked' : '--unchecked'
                  }`}
               >
                  {todoValue}
               </Paragraph>
            )}
            <div className="todo-card__icons">
               {editingId === todoIndex ? (
                  <Save id={todoIndex} value={todoValue} nav={chosenNav} />
               ) : (
                  <Edit id={todoIndex} nav={chosenNav} />
               )}
               <Delete id={todoIndex} nav={chosenNav} />
            </div>
         </div>
      </div>
   );
};

export { TodoCard };
