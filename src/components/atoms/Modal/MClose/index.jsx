import { useDispatch, useSelector } from 'react-redux';
import './MClose.css';
import { toggleModal } from '../../../../features/modal/modalSlice';
const MClose = () => {
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(toggleModal({ isOpen: false }));
   };

   return (
      <div className="modal__close" onClick={handleClick}>
         ✖
      </div>
   );
};

export { MClose };
