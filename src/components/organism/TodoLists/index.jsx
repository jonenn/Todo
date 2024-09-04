import { InteractionBar } from '../../molecules/InteractionBar';
import { TodoCard } from '../../molecules/TodoCard';
import './TodoLists.css';

const TodoLists = () => {
   return (
      <div className="lists">
         <InteractionBar placeholder="Search..." type="search" />
         <div className="lists__items">
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
         </div>
         <InteractionBar
            placeholder="Add a Task"
            type="create"
            className="lists__add"
         />
      </div>
   );
};

export { TodoLists };
