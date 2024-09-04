import { NavItem } from '../../atoms/NavItem';
import navIcon from '../../../assets/nav.svg';
import './NavBtn.css';

const NavBtn = ({ children }) => {
   return (
      <button className="nav__btn">
         <img src={navIcon} alt="" />
         <nav>
            <NavItem>{children}</NavItem>
         </nav>
      </button>
   );
};

export default NavBtn;
