import { useSelector } from 'react-redux';
import { UserWelcome } from '../../atoms/UserWelcome';
import './UserProfile.css';

const UserProfile = () => {
   const nickname = useSelector((state) => {
      return state.modal.nickname;
   });

   const shortNickname = nickname === '' ? '' : nickname.slice(0, 2);
   return (
      <div className="profile">
         {nickname && (
            <>
               <div className="profile__short">{shortNickname}</div>
               <UserWelcome nickname={nickname} />
            </>
         )}
      </div>
   );
};

export { UserProfile };
