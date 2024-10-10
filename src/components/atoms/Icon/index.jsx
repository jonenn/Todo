import { ReactComponent as Check } from '../../../assets/check.svg';
import { ReactComponent as Delete } from '../../../assets/delete.svg';
import { ReactComponent as Edit } from '../../../assets/edit.svg';
import { ReactComponent as Save } from '../../../assets/save.svg';
import { ReactComponent as Search } from '../../../assets/search.svg';
import { ReactComponent as Approve } from '../../../assets/approve.svg';
import { ReactComponent as Create } from '../../../assets/create.svg';
import { ReactComponent as List } from '../../../assets/list.svg';
import './Icon.css';

const Icon = ({ onClick, type, className }) => {
   const iconList = {
      check: Check,
      delete: Delete,
      edit: Edit,
      save: Save,
      search: Search,
      create: Create,
      list: List,
      approve: Approve,
   };

   const ChosenIcon = iconList[type];

   return (
      <>
         {ChosenIcon && <ChosenIcon className={className} onClick={onClick} />}
      </>
   );
};

export { Icon };
