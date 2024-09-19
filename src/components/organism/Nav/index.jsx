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
         {defaultLists.map((nav) => {
            return <NavBtn key={nav.title}>{nav.title}</NavBtn>;
         })}
      </>
   );
};
export { Nav };
