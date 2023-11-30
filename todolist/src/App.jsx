import './App.css';
import Input from './components/Input/Input';
import List from './components/List/List';
import { useState } from 'react';

function App() {
const [inputValue, setInputValue]= useState("");
const [task, setTask] = useState([]);
  return (
    <>
      <Input 
        inputValue={inputValue}
        setInputValue={setInputValue}
        setTask={setTask}
        task={task}
      />
      
     <List 
      task={task}

     /> 
    </>
  )
}

export default App
