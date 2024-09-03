import { H1 } from '../../atoms/H1';
import { TodoLists } from '../../organism/TodoLists';
import './MainTemplate.css';

const MainTemplate = () => {
   return (
      <>
         <div className="nav-container"></div>
         <div className="todos-container">
            <H1>My Day</H1>
            <TodoLists />
         </div>
      </>
   );
};

export { MainTemplate };
