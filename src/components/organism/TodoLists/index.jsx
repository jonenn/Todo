import { InteractionBar } from '../../molecules/InteractionBar';
import { TodoCard } from '../../molecules/TodoCard';

const TodoLists = () => {
   return (
      <div className="lists">
         <InteractionBar placeholder="Search..." type="search" />
         <TodoCard />
         <InteractionBar placeholder="Add a Task" type="create" />
      </div>
   );
};

export { TodoLists };
