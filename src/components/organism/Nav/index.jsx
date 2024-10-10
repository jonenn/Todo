import { NavBtn } from '../../molecules/NavBtn';
import './Nav.css';

const defaultLists = [
   { title: 'My Day' },
   { title: 'Work' },
   { title: 'College' },
];

const Nav = () => {
   return (
      <>
         {defaultLists.map((nav, index) => {
            return (
               <NavBtn key={index} id={index}>
                  {nav.title}
               </NavBtn>
            );
         })}
      </>
   );
};
export { Nav };
