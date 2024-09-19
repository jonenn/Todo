import { Icon } from '../../atoms/Icon';
import { NavItem } from '../../atoms/NavItem';
import './NavBtn.css';

const NavBtn = ({ children }) => {
   return (
      <button className="nav__btn">
         <Icon type="list" />
         <nav>
            <NavItem>{children}</NavItem>
         </nav>
      </button>
   );
};

export { NavBtn };
