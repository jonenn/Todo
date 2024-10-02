import { Paragraph } from '../Paragraph';

const UserWelcome = ({ nickname }) => {
   return <Paragraph>Welcome, {nickname}!</Paragraph>;
};

export { UserWelcome };
