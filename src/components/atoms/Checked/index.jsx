import './Checked.css';
import check from '../../../assets/check.svg';

const Checked = () => {
   return (
      <div className="check check--unchecked">
         <img src={check} className="check__image--unchecked" />
      </div>
   );
};

export { Checked };
