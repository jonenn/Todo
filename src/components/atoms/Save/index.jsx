import saveIcon from '../../../assets/save.svg';

const Save = ({ onSave, text }) => {
   const handleClick = () => {
      onSave();
      console.log('saved');
   };
   return (
      <>
         <div className="todo-card__icon todo-card__icon--save">
            <img src={saveIcon} alt="" onClick={() => handleClick()} />
         </div>
      </>
   );
};

export { Save };
