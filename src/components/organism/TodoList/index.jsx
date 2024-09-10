import { useEffect, useRef, useState } from 'react';
import { InteractionBar } from '../../molecules/InteractionBar';
import { TodoCard } from '../../molecules/TodoCard';
import './TodoList.css';

const TodoList = ({ defaultTodos }) => {
   const listRef = useRef(null);
   const [isAtBottom, setIsAtBottom] = useState(false);
   const [isMiddle, setIsMiddle] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const listElement = listRef.current;
         if (!listElement) return;

         const scrollTop = listElement.scrollTop;
         const scrollHeight = listElement.scrollHeight;
         const clientHeight = listElement.clientHeight;

         const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
         const atTop = scrollTop === 0;
         const middle = scrollTop && !atTop && scrollTop && !atBottom;

         setIsAtBottom(atBottom);
         setIsMiddle(middle);
      };

      const listElement = listRef.current;
      if (listElement) {
         listElement.addEventListener('scroll', handleScroll);
      }
   }, []);

   let maskStyle = isMiddle
      ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)'
      : isAtBottom
      ? 'linear-gradient(to top, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)'
      : 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)';

   return (
      <div className="lists">
         <InteractionBar placeholder="Search..." type="search" />
         <div
            className="lists__items"
            ref={listRef}
            style={{
               maskImage: maskStyle,
               WebkitMaskImage: maskStyle,
            }}
         >
            {defaultTodos.map((todo, index) => (
               <TodoCard key={index}>{todo.text}</TodoCard>
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
