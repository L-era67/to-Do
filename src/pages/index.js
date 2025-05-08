import { useState } from "react";
import { Form } from "../components/Form";
import { Task } from "../components/Task";
import { Filter } from "@/components/Filter";

import style from "../styles/Home.module.css";

export default function Home() {
  const [taskList, setTaskList] = useState([]); /*state global */
  const [list, setList] = useState("all")


  const handleDel = (id) => {
    const result = taskList.filter((task) => task.id !== id);
    setTaskList(result);
  };

  const handleToggle = (id) => {
    const updatecheck = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, isComplated: !task.isComplated };
      }
      return task;
    });
    setTaskList(updatecheck);
    console.log("insdie handleToggle", taskList); /*hots*/
  };

  // console.log("tasklist:", taskList);

  return (
    <div className={style.Con}>
      <div className={style.main}>

        <h3>To-Do-List</h3>

        <Form setTaskList={setTaskList} taskList={taskList} />

        {/* <Filter setTaskList={setTaskList} taskList={taskList} /> */}
        <Filter 
        
        />

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

// const numbers = [1.2];

// const filterValue = 1;
