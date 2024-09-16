import { useState } from 'react';
import { Checked } from '../../atoms/Checked';
import './TodoCard.css';
import { Edit } from '../../atoms/Edit';
import { Delete } from '../../atoms/Delete';
import TextareaAutosize from 'react-textarea-autosize';

const TodoCard = ({ children, checked, onEdit, text, todos, setTodos }) => {
   const [isChecked, setIsChecked] = useState(checked);

   const [editing, setEditing] = useState(false);
   const [todoValue, setTodoValue] = useState(children);

   const handleClick = (whenChecked) => {
      setIsChecked(whenChecked);
      console.log(whenChecked, 'parent');
   };

   const checkATodo = (text, checkState) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => {
         return todo.text === text;
      });
      console.log(todoIndex);
      newTodos[todoIndex] = { ...newTodos[todoIndex], checked: checkState };
      setTodos(newTodos);
   };

   const deleteATodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => {
         return todo.text === text;
      });
      newTodos.splice(todoIndex, 1);
      setTodos(newTodos);
      console.log(newTodos);
   };

   const editATodo = (text) => {
      setEditing(true);
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => {
         return todo.text === text;
      });
      console.log('lets edit', todoIndex);
      // newTodos.splice(todoIndex, 1);
      // setTodos(newTodos);
      // console.log(newTodos);
   };

   const editValue = (eve) => {
      setTodoValue(eve.target.value);
   };

   return (
      <div
         className={`todo-card ${
            isChecked ? 'todo-card--checked' : 'todo-card--unchecked'
         }`}
      >
         <Checked
            onCheckChange={handleClick}
            checked={checked}
            onComplete={checkATodo}
            text={text}
         />
         <div className="todo-card__content">
            {editing ? (
               <TextareaAutosize
                  className="todo-card__input"
                  value={todoValue}
                  onChange={editValue}
                  maxRows={7}
                  maxlength="200"
               />
            ) : (
               <p
                  className={`todo-card__name ${
                     isChecked
                        ? 'todo-card__name--checked'
                        : 'todo-card__name--unchecked'
                  }`}
               >
                  {children}
               </p>
            )}
            <div className="todo-card__icons">
               <Edit onEdit={editATodo} text={text} />
               <Delete onDelete={deleteATodo} text={text} />
            </div>
         </div>
      </div>
   );
};

export { TodoCard };
