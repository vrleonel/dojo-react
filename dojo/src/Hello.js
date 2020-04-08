import React, {useState} from 'react';

function ListItem(props) {
  return <li>{props.children}</li>;
}

export default function Hello() {
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
    <>
      <h1>Hello World!</h1>
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
    </>
  );
}