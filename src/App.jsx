import './App.css';
import { TodoCard } from './components/molecules/TodoCard';
import { InteractionBar } from './components/molecules/InteractionBar';

function App() {
   return (
      <>
         <InteractionBar placeholder="Search..." type="search" />
         <TodoCard />
      </>
   );
}

export default App;
