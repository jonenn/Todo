import './LoadingCard.css';

const LoadingCard = () => {
   return (
      <div className="loading-card">
         <div className="loading-card__shape"></div>
         <div className="loading-card__content">
            <div className="loading-card__subcontent"></div>
         </div>

         <div className="loading-card__shapes-container">
            <div className="loading-card__shape loading-card__shape--secondary"></div>
            <div className="loading-card__shape loading-card__shape--secondary"></div>
         </div>
      </div>
   );
};

export { LoadingCard };
