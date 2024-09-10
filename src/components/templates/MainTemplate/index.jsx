import { H1 } from '../../atoms/H1';
import { H2 } from '../../atoms/H2';
import { Nav } from '../../organism/Nav';
import { TodoList } from '../../organism/TodoList';
import './MainTemplate.css';
import octopus from '../../../assets/octopus.png';
import { TodoCounter } from '../../molecules/TodoCounter';
import { useEffect, useState } from 'react';

const MainTemplate = () => {
   const [checked, setChecked] = useState([]);

   useEffect(() => {
      getCheckedTodos();
   }, [checked]);

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

   const getCheckedTodos = () => {
      const checkedTodos = defaultTodos.filter((todo) => {
         return todo.checked === true;
      });
      setChecked(checkedTodos.length);
   };
   return (
      <>
         <div className="nav-container">
            <div>
               <H2>Lists</H2>
               <hr className="separator" />
               <Nav />
            </div>
            <div>
               <img src={octopus} alt="todo-octopus" className="nav__img" />
               <hr className="separator" />
            </div>
         </div>
         <div className="todos-container">
            <div className="todos-container__title">
               <H1>My Day</H1>
               <TodoCounter total={defaultTodos.length} completed={checked} />
            </div>
            <TodoList defaultTodos={defaultTodos} />
         </div>
      </>
   );
};

export { MainTemplate };
