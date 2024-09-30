import { useEffect, useState } from 'react';
import { Checked } from '../../atoms/Checked';
import './TodoCard.css';
import { Edit } from '../../atoms/Edit';
import { Delete } from '../../atoms/Delete';
import TextareaAutosize from 'react-textarea-autosize';
import { Save } from '../../atoms/Save';

const TodoCard = ({
   children,
   checked,
   onEdit,
   text,
   todos,
   setTodos,
   addTodoValue,
   saveAllTodos,
}) => {
   const [isChecked, setIsChecked] = useState(checked);

   const [editing, setEditing] = useState(false);
   const [todoValue, setTodoValue] = useState(children);

   const handleKeyDown = (eve) => {
      if (eve.key === 'Enter') {
         saveATodo();
      }
   };

   const handleClick = (whenChecked) => {
      setIsChecked(whenChecked);
      console.log(whenChecked, 'parent');
   };

   // const checkATodo = (text, checkState) => {
   //    const newTodos = [...todos];
   //    const todoIndex = newTodos.findIndex((todo) => {
   //       return todo.text === text;
   //    });
   //    console.log(todoIndex);
   //    newTodos[todoIndex] = { ...newTodos[todoIndex], checked: checkState };
   //    setTodos(newTodos);
   // };

   const deleteATodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => {
         return todo.text === text;
      });
      newTodos.splice(todoIndex, 1);
      saveAllTodos(newTodos);
      console.log(newTodos);
   };

   const editATodo = () => {
      setEditing(true);
   };

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

   const todoIndex = todos.findIndex((todo) => {
      return todo.text === text;
   });

   return (
      <div
         className={`todo-card todo-card${
            isChecked ? '--checked' : '--unchecked'
         }`}
      >
         {/* {todoIndex} */}
         <Checked
            onCheckChange={handleClick}
            checked={checked}
            // onComplete={checkATodo}
            text={text}
            id={todoIndex}
         />
         <div className="todo-card__content">
            {editing ? (
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
               {editing ? (
                  <Save onSave={saveATodo} text={text} />
               ) : (
                  <Edit onEdit={editATodo} />
               )}
               <Delete onDelete={deleteATodo} text={text} />
            </div>
         </div>
      </div>
   );
};

export { TodoCard };
