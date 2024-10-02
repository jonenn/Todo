import { useState } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import './MainPage.css';
import { Modal } from '../../organism/Modal';
import { useSelector } from 'react-redux';

const MainPage = () => {
   const toggleModal = useSelector((state) => {
      return state.modal.isOpen;
   });
   return (
      <div className="main">
         <MainTemplate />
         {toggleModal && <Modal title="Welcome!" />}
      </div>
   );
};

export { MainPage };
