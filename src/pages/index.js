import { useState } from "react";
import { Form } from "../components/Form";
import { Task } from "../components/Task";
import { Filter } from "@/components/Filter";
import {Footer} from "../components/Footer"

import style from "../styles/Home.module.css";
import { NoTask } from "@/components/NoTask";

export default function Home() {

  const [taskList, setTaskList] = useState([]); /*state global */
  const [list, setList] = useState("all") /* 3 btn filter hiih*/
  

// handle DELETE
  const handleDel = (id) => {
    const result = taskList.filter((task) => {
      const ustga = window.confirm("Are you sure you want to delete this task?") /*Tuhain hunees T or F utga awdag baihnee ok darwal butsaa if*/

      if(ustga){
       return task.id !==id
      }
     return task;
    });
     
    setTaskList(result);
  };


// CHECK
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



  // FILTER LIST ["all", "active", "completed"]
  const filterTaskList = taskList.filter((task)=>{
    if(list === "active" && task.isComplated===false){
      return task;
    }
    if(list==="completed" && task.isComplated===true){

      return task;
    }
    if(list==="all"){
      return task;
    }
  })
  console.log("FILTERED:", filterTaskList)



  // FOOTER
  // const allCount = (taskList.map((task)=>task))
 
  const allCount = taskList.length
   console.log("allCount:", allCount)

  const completedCount = (taskList.filter((taskComp)=> taskComp.isComplated === true)).length
    
  console.log("Completed length:", completedCount);


  return (
    <div className={style.Con}>
      <div className={style.main}>

        <h3>To-Do-List</h3>

        <Form setTaskList={setTaskList} taskList={taskList} />

        <Filter 
          lists = {["all", "active", "completed"]}
          setList = {setList}
          checkedList = {list}
        />

        {filterTaskList.map((task, index) => (
          <Task
            key={index}
            task={task}
            removeTaskById={handleDel}
            toggleTaskById={handleToggle}
          />
        ))}
        {filterTaskList.map(task)=> task.length===0? <NoTask /> : task}
        <NoTask />

        <Footer allCount = {allCount} completedCount={completedCount}/>
      </div>
    </div>
  );
}


