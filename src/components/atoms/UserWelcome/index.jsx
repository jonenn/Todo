import { Paragraph } from '../Paragraph';

const UserWelcome = ({ nickname }) => {
   return (
      <Paragraph>
         Welcome, <span className="capitalized">{nickname}</span>!
      </Paragraph>
   );
};

export { UserWelcome };
