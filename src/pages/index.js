import { useState } from "react";
import { Form } from "../components/Form";
import { Task } from "../components/task";
import { Filter } from "@/components/Filter";

import style from "../styles/Home.module.css";

export default function Home() {
  const [taskList, setTaskList] = useState([]); /*state global */

  const handleDel = (id) => {
    const result = taskList.filter((task) => task.id !== id);
    setTaskList(result);
  };

  const handleToggle = (id) => {
   
    const updatecheck = taskList.map((task) => {
      console.log("togglell", task)
      if(id===task.id){
       return {...task, isComplated: !task.isComplated}
      }
      return task;
    });
    console.log("Comp:", updatecheck)
  };

  // console.log("tasklist:", taskList);

  return (
    <div className={style.Con}>
      <div className={style.main}>
        <h3>To-Do-List</h3>

        <Form setTaskList={setTaskList} taskList={taskList} />

        <Filter setTaskList={setTaskList} taskList={taskList} />

        {taskList.map((task, index) => (
          <Task
            key={index}
            task={task}
            removeTaskById={handleDel}
            toggleTaskById={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
