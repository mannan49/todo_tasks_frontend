
import './App.css';

// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div className='mt-12 flex flex-col items-center'>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;