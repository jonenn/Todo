import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../atoms/Icon';
import { NavItem } from '../../atoms/NavItem';
import './NavBtn.css';
import { chooseNav } from '../../../features/nav/navSlice';
import { loadTodos } from '../../../features/todo/todoSlice';

const NavBtn = ({ children, id }) => {
   const nav = useSelector((state) => {
      return state.nav.value;
   });

   const dispatch = useDispatch();

   const handleClick = () => {
      const newId = id > 0 ? `-${id}` : '';
      dispatch(chooseNav({ nav: `todo-app-jonenn${newId}` }));
      dispatch(loadTodos({ todos: `todo-app-jonenn${newId}` }));
   };

   return (
      <button className="nav__btn" onClick={handleClick}>
         <Icon type="list" />
         <nav>
            <NavItem>{children}</NavItem>
         </nav>
      </button>
   );
};

export { NavBtn };
