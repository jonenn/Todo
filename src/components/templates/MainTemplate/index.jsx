import { H1 } from '../../atoms/H1';
import { H3 } from '../../atoms/H3';
import NavBtn from '../../molecules/NavBtn';
import { TodoLists } from '../../organism/TodoLists';
import './MainTemplate.css';

const MainTemplate = () => {
   return (
      <>
         <div className="nav-container">
            <NavBtn>My Day</NavBtn>
            <NavBtn>My Day</NavBtn>
            <NavBtn>My Day</NavBtn>
         </div>
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
