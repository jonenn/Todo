import { H1 } from '../../atoms/H1';
import { H2 } from '../../atoms/H2';
import { Nav } from '../../organism/Nav';
import { TodoList } from '../../organism/TodoList';
import './MainTemplate.css';
import octopus from '../../../assets/octopus.png';
import { TodoCounter } from '../../molecules/TodoCounter';
import { useEffect, useState } from 'react';
import { UserProfile } from '../../molecules/UserProfile';

const defaultTodos = [
   { text: 'Research the Company', checked: false },
   { text: 'Review the Job Description', checked: false },
   { text: 'Prepare Your Elevator Pitch', checked: false },
   { text: 'Highlight Key Achievements', checked: false },
   { text: 'Develop Your Interview Strategy', checked: false },
   { text: 'Practice Technical Skills', checked: false },
   { text: 'Prepare Questions for the HR Interviewer', checked: false },
   { text: 'Prepare Your Documents', checked: false },
   { text: 'Dress Appropriately', checked: false },
   { text: 'Plan Your Arrival', checked: false },
   { text: 'Review Feedback', checked: false },
];

const getInitialTodos = () => {
   const parsedTodos = localStorage.getItem('todo-app-jonenn');
   return parsedTodos ? JSON.parse(parsedTodos) : defaultTodos;
};

const MainTemplate = () => {
   const [todos, setTodos] = useState(getInitialTodos);
   const [searchValue, setSearchValue] = useState('');
   const [addTodoValue, setAddTodoValue] = useState('');

   useEffect(() => {
      localStorage.setItem('todo-app-jonenn', JSON.stringify(todos));
   }, [todos]);

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
      const newTodos = [{ text: addTodoValue, checked: false }, ...todos];
      saveAllTodos(newTodos);
      console.log(newTodos);
   };

   const saveAllTodos = (newTodos) => {
      localStorage.setItem('todo-app-jonenn', JSON.stringify(newTodos));
      setTodos(newTodos);
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
               saveAllTodos={saveAllTodos}
               addATodo={addATodo}
            />
         </div>
      </>
   );
};

export { MainTemplate };
