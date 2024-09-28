import { H1 } from '../../atoms/H1';
import { H2 } from '../../atoms/H2';
import { Nav } from '../../organism/Nav';
import { TodoList } from '../../organism/TodoList';
import './MainTemplate.css';
import octopus from '../../../assets/octopus.png';
import { TodoCounter } from '../../molecules/TodoCounter';
import { useState } from 'react';
import { UserProfile } from '../../molecules/UserProfile';
import { useLocalStorage } from '../../../hooks/localStorage';
import { useSelector } from 'react-redux';

const MainTemplate = () => {
   const { defaultTodos } = useSelector((store) => {
      return store.todo;
   });

   const {
      localData: todos,
      saveAllData: setTodos,
      dataState,
   } = useLocalStorage('todo-app-jonenn', defaultTodos);
   const [searchValue, setSearchValue] = useState('');
   const [addTodoValue, setAddTodoValue] = useState('');

   const checkedTodos = todos.filter((todo) => {
      return !!todo.checked;
   });

   const totalTodos = todos.length;

   const searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const inputText = searchValue.toLowerCase();
      return todoText.includes(inputText);
   });

   const addATodo = () => {
      if (addTodoValue.trim().length > 0) {
         const newTodos = [{ text: addTodoValue, checked: false }, ...todos];
         setTodos(newTodos);
      }
      console.log(addTodoValue);
   };

   return (
      <>
         <div className="nav">
            <div className="nav__container"></div>
            <div className="nav__main">
               <H2>Lists</H2>
               <hr className="separator" />
               <Nav />
            </div>
            <div className="nav__content">
               <img src={octopus} alt="todo-octopus" className="nav__img" />
               <hr className="separator separator--bottom" />
               <UserProfile></UserProfile>
            </div>
         </div>
         <div className="todos">
            <div className="todos__title">
               <H1>My Day</H1>
               <TodoCounter
                  total={totalTodos}
                  completed={checkedTodos.length}
               />
            </div>
            <TodoList
               searchedTodos={searchedTodos}
               searchValue={searchValue}
               setSearchValue={setSearchValue}
               addTodoValue={addTodoValue}
               setAddTodoValue={setAddTodoValue}
               todos={todos}
               setTodos={setTodos}
               saveAllTodos={setTodos}
               addATodo={addATodo}
               loading={dataState.loading}
               error={dataState.error}
            />
         </div>
      </>
   );
};

export { MainTemplate };
