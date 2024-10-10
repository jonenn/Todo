import { useSelector } from 'react-redux';
import { NavBtn } from '../../molecules/NavBtn';
import './Nav.css';

const Nav = () => {
   const lists = useSelector((state) => {
      return state.nav.defaultCategories;
   });

   return (
      <>
         {lists.map((nav, index) => {
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
