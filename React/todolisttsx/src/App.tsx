import './App.css';
import ToDoForm from './Components/ToDoForm';
import ToDoItem from './Components/ToDoItem';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <ToDoForm/>
      <ToDoItem/>
      </div>
    </div>
  );
}

export default App;
