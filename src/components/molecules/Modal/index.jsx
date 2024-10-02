import ReactDOM from 'react-dom';
import './Modal.css';
import { MOverlay } from '../../atoms/Modal/MOverlay';
import { MContent } from '../../atoms/Modal/MContent';

const Modal = ({ children }) => {
   return ReactDOM.createPortal(
      <div className="modal__container">
         <MOverlay />
         <MContent title="Welcome!">{children}</MContent>
      </div>,
      document.getElementById('modal')
   );
};

export { Modal };
