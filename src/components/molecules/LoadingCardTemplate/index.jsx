import './LoadingCardTemplate.css';
import { LoadingCard } from '../../atoms/LoadingCard';

const LoadingCardTemplate = () => {
   return (
      <div className="todo-card__loading--template">
         {[...Array(7)].map((_, index) => (
            <LoadingCard key={index} />
         ))}
      </div>
   );
};

export { LoadingCardTemplate };
