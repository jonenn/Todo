import { UserWelcome } from '../../atoms/UserWelcome';
import './UserProfile.css';

const UserProfile = ({ children = 'Guest' }) => {
   const nickname = children,
      shortNickname = nickname.slice(0, 2);
   return (
      <div className="profile">
         <div className="profile__short">{shortNickname}</div>
         <UserWelcome nickname={nickname} />
      </div>
   );
};

export { UserProfile };
