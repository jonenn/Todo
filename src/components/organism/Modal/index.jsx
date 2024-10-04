import { useState } from 'react';
import { H2 } from '../../atoms/H2';
import { Paragraph } from '../../atoms/Paragraph';
import { Separator } from '../../atoms/Separator';
import { InteractionBar } from '../../molecules/InteractionBar';
import { ModalContainer } from '../../molecules/Modal/ModalContainer';
import { MClose } from '../../atoms/Modal/MClose';
const Modal = ({ title }) => {
   const [value, setValue] = useState('');

   return (
      <ModalContainer>
         <MClose />
         <H2 className="modal__title">{title}</H2>
         <Separator />
         <Paragraph className="modal__p">
            Please add a nickname you’d like to be referred as:
         </Paragraph>
         <InteractionBar type="approve" value={value} setValue={setValue} />
      </ModalContainer>
   );
};

export { Modal };
