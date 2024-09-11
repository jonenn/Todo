import UserWelcome from '../../atoms/UserWelcome';
import './UserProfile.css';

const UserProfile = ({ children = 'Jonenn' }) => {
   const nickname = children,
      shortNickname = nickname.slice(0, 2);
   return (
      <div className="profile">
         <div className="profile__avatar">
            <div className="profile__short">{shortNickname}</div>
         </div>
         <UserWelcome nickname={nickname} />
      </div>
   );
};

export default UserProfile;
