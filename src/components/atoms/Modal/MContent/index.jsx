import { H2 } from '../../H2';
import { Paragraph } from '../../Paragraph';
import { Separator } from '../../Separator';
import './MContent.css';

const MContent = ({ title, children }) => {
   return (
      <div className="modal__content">
         <H2 className="modal__title">{title}</H2>
         <Separator />
         <Paragraph>
            Please add a nickname you’d like to be referred as:
         </Paragraph>
      </div>
   );
};

export { MContent };
