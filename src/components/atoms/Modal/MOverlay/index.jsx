import './MOverlay.css';

const MOverlay = ({ onClick }) => {
   return <div className="modal__overlay" onClick={onClick}></div>;
};

export { MOverlay };
