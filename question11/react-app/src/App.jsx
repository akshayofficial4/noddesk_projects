import { useEffect, useState } from "react";

function App(){
  const [ tasks, setTasks ] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [ taskText, setTaskText ] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks" , JSON.stringify(tasks));
  }, [tasks])
  
  
  

  function addTask() {
    if(taskText === "") return;
    setTasks([...tasks, taskText]);
    setTaskText("")
  }

  function deleteTask (index) {
    setTasks( tasks.filter((_, i) => i !== index ));
  }


  return (
    <div>
      <h1>react todo</h1>
      <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} onKeyDown={(e) => {
        if(e.key=== "Enter"){
          addTask();
        }
      }} placeholder="enter todos"/>
      <button onClick={addTask}>Add</button>

      <ul>
        {
          tasks.map((task, index) => (
            <li key={index}>
                {task}

                <button onClick={() => deleteTask(index)}>delete</button>
            </li>
           ) )
        }
      </ul>

    </div>
  );
}

export default App;