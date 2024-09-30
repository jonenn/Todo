import { useEffect, useState } from 'react';
import { Checked } from '../../atoms/Checked';
import './TodoCard.css';
import { Edit } from '../../atoms/Edit';
import { Delete } from '../../atoms/Delete';
import TextareaAutosize from 'react-textarea-autosize';
import { Save } from '../../atoms/Save';
import { useSelector } from 'react-redux';

const TodoCard = ({
   children,
   onEdit,
   text,
   todos,
   setTodos,
   addTodoValue,
   saveAllTodos,
}) => {
   const todoIndex = todos.findIndex((todo) => {
      return todo.text === text;
   });

   const { todoItems, editingId } = useSelector((state) => {
      return state.todos;
   });

   const isChecked = todoItems[todoIndex].checked;

   const [editing, setEditing] = useState(false);
   const [todoValue, setTodoValue] = useState(children);

   const handleKeyDown = (eve) => {
      if (eve.key === 'Enter') {
         saveATodo();
      }
   };

   // const editATodo = () => {
   //    setEditing(true);
   // };

   const editValue = (eve) => {
      setTodoValue(eve.target.value);
   };

   const saveATodo = () => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => {
         return todo.text === text;
      });
      console.log(todoIndex);
      newTodos[todoIndex] = { ...newTodos[todoIndex], text: todoValue };
      saveAllTodos(newTodos);
      console.log(newTodos);
      setEditing(false);
   };

   return (
      <div
         className={`todo-card todo-card${
            isChecked ? '--checked' : '--unchecked'
         }`}
      >
         <Checked
            // onComplete={checkATodo}
            text={text}
            id={todoIndex}
         />
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
               <p
                  className={`todo-card__name todo-card__name${
                     isChecked ? '--checked' : '--unchecked'
                  }`}
               >
                  {todoValue}
               </p>
            )}
            <div className="todo-card__icons">
               {editingId === todoIndex ? (
                  <Save onSave={saveATodo} text={text} />
               ) : (
                  <Edit id={todoIndex} />
               )}
               <Delete id={todoIndex} />
            </div>
         </div>
      </div>
   );
};

export { TodoCard };
