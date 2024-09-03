import { H1 } from '../../atoms/h1';
import { TodoLists } from '../../organism/TodoLists';

const MainTemplate = () => {
   return (
      <>
         <div></div>
         <div>
            <H1>My Day</H1>
            <TodoLists />
         </div>
      </>
   );
};

export { MainTemplate };
