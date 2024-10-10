import { H3 } from '../../atoms/H3';

const TodoCounter = ({ completed, total, className }) => {
   const phrase =
      total === 0
         ? 'Get started!'
         : completed === total
         ? 'You’ve nailed it!'
         : completed > total - 3
         ? 'Almost there!'
         : completed > total / 2
         ? 'You’re on the right track!'
         : completed === 0
         ? 'Starting is the first step to success'
         : 'Keep going, you’ve got this!';
   return (
      <H3 className={className}>
         {phrase}{' '}
         {completed === total
            ? ''
            : completed > 0
            ? ` ${completed} out of ${total}`
            : ''}
      </H3>
   );
};

export { TodoCounter };
