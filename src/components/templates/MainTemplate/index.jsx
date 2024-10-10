import { H1 } from '../../atoms/H1';
import { H2 } from '../../atoms/H2';
import { Nav } from '../../organism/Nav';
import { TodoList } from '../../organism/TodoList';
import './MainTemplate.css';
import octopus from '../../../assets/octopus.png';
import { TodoCounter } from '../../molecules/TodoCounter';
import { useState } from 'react';
import { UserProfile } from '../../molecules/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { Separator } from '../../atoms/Separator';

const MainTemplate = () => {
   const { todoItems: todos } = useSelector((store) => {
      return store.todos;
   });

   const nav = useSelector((store) => {
      return store.nav.value;
   });

   const [searchValue, setSearchValue] = useState('');

   const checkedTodos = todos.filter((todo) => {
      return !!todo.checked;
   });

   const totalTodos = todos.length;

   const searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const inputText = searchValue.toLowerCase();
      return todoText.includes(inputText);
   });

   return (
      <>
         <div className="nav">
            <div className="nav__container"></div>
            <div className="nav__main">
               <H2>Lists</H2>
               <Separator />
               <Nav />
            </div>
            <div className="nav__content">
               <img src={octopus} alt="todo-octopus" className="nav__img" />
               <Separator className="separator--bottom" />
               <UserProfile />
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
               todos={todos}
            />
         </div>
      </>
   );
};

export { MainTemplate };
