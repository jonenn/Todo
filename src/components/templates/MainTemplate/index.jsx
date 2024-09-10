import { H1 } from '../../atoms/H1';
import { H2 } from '../../atoms/H2';
import { Nav } from '../../organism/Nav';
import { TodoLists } from '../../organism/TodoLists';
import './MainTemplate.css';
import octopus from '../../../assets/octopus.png';
import { TodoCounter } from '../../molecules/TodoCounter';

const MainTemplate = () => {
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
               <TodoCounter total={15} completed={15} />
            </div>
            <TodoLists />
         </div>
      </>
   );
};

export { MainTemplate };
