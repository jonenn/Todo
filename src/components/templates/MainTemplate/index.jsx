import { H1 } from '../../atoms/H1';
import { H3 } from '../../atoms/H3';
import { TodoLists } from '../../organism/TodoLists';
import './MainTemplate.css';

const MainTemplate = () => {
   return (
      <>
         <div className="nav-container"></div>
         <div className="todos-container">
            <div className="todos-container__title">
               <H1>My Day</H1>
               <H3>3 out of 5</H3>
            </div>
            <TodoLists />
         </div>
      </>
   );
};

export { MainTemplate };
