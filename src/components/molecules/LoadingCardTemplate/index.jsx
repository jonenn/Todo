import './LoadingCardTemplate.css';
import { LoadingCard } from '../../organism/LoadingCard';

const LoadingCardTemplate = () => {
   return (
      <div className="todo-card__loading--template">
         {[...Array(12)].map((_, index) => (
            <LoadingCard key={index} />
         ))}
      </div>
   );
};

export { LoadingCardTemplate };
