import { useEffect, useRef, useState } from 'react';
import { InteractionBar } from '../../molecules/InteractionBar';
import { TodoCard } from '../../molecules/TodoCard';
import './TodoList.css';

const TodoList = ({
   defaultTodos,
   searchedTodos,
   searchValue,
   setSearchValue,
}) => {
   const listRef = useRef(null);
   const [isAtBottom, setIsAtBottom] = useState(false);
   const [isAtTop, setIsAtTop] = useState(false);
   const [isMiddle, setIsMiddle] = useState(false);
   const [isBoth, setIsBoth] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const listElement = listRef.current;
         if (!listElement) return;

         const scrollTop = listElement.scrollTop;
         const scrollHeight = listElement.scrollHeight;
         const clientHeight = listElement.clientHeight;

         const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
         const atTop = scrollTop === 0;
         const middle = !atTop && !atBottom;
         const both = atTop && atBottom;

         setIsAtBottom(atBottom);
         setIsAtTop(atTop);
         setIsMiddle(middle);
         setIsBoth(both);
      };

      const listElement = listRef.current;
      if (listElement) {
         listElement.addEventListener('scroll', handleScroll);
         handleScroll();
      }

      return () => {
         if (listElement) {
            listElement.removeEventListener('scroll', handleScroll);
         }
      };
   }, [searchValue]);

   let maskStyle = isMiddle
      ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)'
      : isAtTop && isAtBottom
      ? 'none'
      : isAtBottom
      ? 'linear-gradient(to top, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)'
      : 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)';

   return (
      <div className="lists">
         <InteractionBar
            placeholder="Search..."
            type="search"
            searchValue={searchValue}
            setSearchValue={setSearchValue}
         />
         <div
            className="lists__items"
            ref={listRef}
            style={{
               maskImage: maskStyle,
               WebkitMaskImage: maskStyle,
            }}
         >
            {searchedTodos.map((todo, index) => (
               <TodoCard key={index} checked={todo.checked}>
                  {todo.text}
               </TodoCard>
            ))}
            <div className="gradient-overlay"></div>
         </div>
         <InteractionBar
            placeholder="Add a Task"
            type="create"
            className="lists__add"
         />
      </div>
   );
};

export { TodoList };
