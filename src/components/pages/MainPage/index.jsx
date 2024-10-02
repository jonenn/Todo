import { useState } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import './MainPage.css';
import { Modal } from '../../molecules/Modal';

const MainPage = () => {
   const [toggleModal, setToggleModal] = useState(true);
   return (
      <div className="main">
         <MainTemplate />
         {toggleModal && <Modal />}
      </div>
   );
};

export { MainPage };
