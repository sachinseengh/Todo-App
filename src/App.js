import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent';
import ClassComponent from './Components/ClassComponent';
import Counter from './Components/CounterButton/counter';
import TODO from './Components/ToDoApp/todo';

function App() {
  return (
    <div className="App">
        
        {/* <Counter></Counter> */}
        <TODO></TODO>
     
    </div>
  );
}

export default App;
