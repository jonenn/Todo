import { useEffect, useRef, useState } from 'react';
import { InteractionBar } from '../../molecules/InteractionBar';
import { TodoCard } from '../../molecules/TodoCard';
import './TodoList.css';
import { LoadingCardTemplate } from '../../molecules/LoadingCardTemplate';

const TodoList = ({ searchedTodos, searchValue, setSearchValue, todos }) => {
   const listRef = useRef(null);
   const [isAtBottom, setIsAtBottom] = useState(false);
   const [isAtTop, setIsAtTop] = useState(false);
   const [isMiddle, setIsMiddle] = useState(false);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
         setError(false);
      }, 900);

      const handleScroll = () => {
         const listElement = listRef.current;
         if (!listElement) return;

         const scrollTop = listElement.scrollTop;
         const scrollHeight = listElement.scrollHeight;
         const clientHeight = listElement.clientHeight;

         const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
         const atTop = scrollTop <= 0;
         const middle = !atTop && !atBottom;

         setIsAtBottom(atBottom);
         setIsAtTop(atTop);
         setIsMiddle(middle);
         console.log(scrollTop);
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
            type="search"
            value={searchValue}
            setValue={setSearchValue}
         />
         <div
            className="lists__items"
            ref={listRef}
            style={{
               maskImage: maskStyle,
               WebkitMaskImage: maskStyle,
            }}
         >
            {loading && <LoadingCardTemplate />}
            {error && <p>There was an error loading your data: {error}</p>}

            {!todos.length ? (
               <p className="no-todos">Create your first task!</p>
            ) : !searchedTodos.length ? (
               <p className="no-todos no-results">
                  No results found. Try a different search term.
               </p>
            ) : (
               !loading &&
               searchedTodos.map((todo) => (
                  <TodoCard key={todo.text} text={todo.text} todos={todos}>
                     {todo.text}
                  </TodoCard>
               ))
            )}
         </div>
         <InteractionBar type="create" className="lists__add" />
      </div>
   );
};

export { TodoList };
