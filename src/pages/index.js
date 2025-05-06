import { useState } from "react";
import {Form} from "../components/Form"
import {Task} from "../components/task"
import { Filter } from "@/components/Filter";

import style from "../styles/Home.module.css"

export default function Home() {
  const [taskList, setTaskList] = useState([]) /*state global */
  console.log("tasklist:",taskList);



  return (
    <div className={style.main}>
      <h3>To-Do-List</h3>
     <Form setTaskList={setTaskList} taskList={taskList}/>
     <Filter/>
     {taskList.map((task)=>(
      <Task task={task}/>
     ))}
     
     
    </div>
  );
}
