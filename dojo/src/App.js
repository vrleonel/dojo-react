import React, { useState, } from 'react';
import Hello from './Hello';


function ListItem(props) {
  return <li>{props.children}</li>;
}

function App() {
  const [task, setTask] = useState([
    {
      title: "Tarefa 1",
      status: false
    },
    {
      title: "Tarefa 2",
      status: false
    },
    {
      title: "Tarefa 3",
      status: false
    }
  ]);

  function handleClick(index) {
    const newTask = task.map((item, i) => {
      return i === index ? {...item, status: !item.status} : item; 
    });
    
    setTask(newTask);
  }
  
  return (
    <div className="App">
      <Hello />
      
      <ul>
        {task.map((item, index) => (
          <ListItem key={index}>
            {item.title}
            {item.status && " (check) " }
            <button onClick={() => handleClick(index)}>
              Click me
            </button>
          </ListItem>

        ))}
      </ul>
    </div>
  );
}

export default App;
