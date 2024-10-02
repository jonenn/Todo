import { LCShape } from '../../atoms/LoadingCard/LCShape';
import { LCContent } from '../../molecules/LoadingCard/LCContent';
import './LoadingCard.css';

const LoadingCard = () => {
   return (
      <div className="loading-card">
         <LCShape />
         <LCContent />
         <div className="loading-card__shapes-container">
            <LCShape className="loading-card__shape--secondary" />
            <LCShape className="loading-card__shape--secondary" />
         </div>
      </div>
   );
};

export { LoadingCard };
