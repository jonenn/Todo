import { H1 } from '../../atoms/H1';
import { H2 } from '../../atoms/H2';
import { Nav } from '../../organism/Nav';
import { TodoList } from '../../organism/TodoList';
import './MainTemplate.css';
import octopus from '../../../assets/octopus.png';
import { TodoCounter } from '../../molecules/TodoCounter';
import { useState } from 'react';
import { UserProfile } from '../../molecules/UserProfile';
import { useSelector } from 'react-redux';
import { Separator } from '../../atoms/Separator';

const MainTemplate = () => {
   const [isOn, setIsOn] = useState(true)

   const { todoItems: todos } = useSelector((store) => {
      return store.todos;
   });

   const navTitle = useSelector((store) => {
      return store.nav.title;
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

   const handleNavClick = () => {
      setIsOn(prevState => !prevState)
   }

   return (
      <>
         <div className={`nav nav--${isOn ? 'on':'off'}`}>
            <div className="nav__container"></div>
            <div className="nav__main">
               <H2>Lists</H2>
               <Separator />
               <Nav
                  handleNavClick={handleNavClick}
               />
            </div>
            <div className="nav__content">
               <img src={octopus} alt="todo-octopus" className="nav__img" />
               <Separator className="separator--bottom" />
               <UserProfile />
            </div>
         </div>
         <div className={`todos todos--${isOn ? 'off': 'on'}`}>
            <div className="todos__titles">
               <H1>{navTitle}</H1>
               <TodoCounter
                  total={totalTodos}
                  completed={checkedTodos.length}
                  className="todos__subtitle"
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
