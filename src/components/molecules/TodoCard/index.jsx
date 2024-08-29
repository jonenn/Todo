import { Checked } from '../../atoms/Checked';
import './TodoCard.css';

const TodoCard = () => {
   return (
      <div className="todo-card">
         <Checked />
         <p className="todo-card__name">Lorem Ipsum</p>
      </div>
   );
};

export { TodoCard };
