import { useState } from "react";

function App(){
  const [ tasks, setTasks ] = useState([]);
  const [ taskText, setTaskText ] = useState("");

  function addtask() {
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
      <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="enter todos"/>
      <button onClick={addtask}>Add</button>

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