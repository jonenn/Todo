import { Paragraph } from '../Paragraph';

const NoTodos = ({ type }) => {
   let message;
   if (type === 'no-results') {
      message = 'No results found. Try a different search term.';
   } else {
      message = 'Create your first task!';
   }
   return <Paragraph className={`no-todos ${type}`}>{message}</Paragraph>;
};

export { NoTodos };
