import { useState } from "react";
import { Form } from "../components/Form";
import { Task } from "../components/Task";
import { Filter } from "@/components/Filter";
import { Footer } from "../components/Footer";

import style from "../styles/Home.module.css";
import { NoTask } from "@/components/NoTask";

export default function Home() {
  const [taskList, setTaskList] = useState(
    []
  ); /*state global ene heseg zuwhun niit array haruulna*/
  const [list, setList] =
    useState(
      "all"
    ); /* 3 btn songoltoor buh arr, FALSE or TRUE gesen filter-tei songolttoi ARRAY gargaj irehnee gol ni heseg maain "filterTaskList"-r damjin shuu */
  const lists = ["all", "active", "completed"];

  // const lists = [
  //   { name: "all", backgroundColor: "blue" },
  //   { name: "active", backgroundColor: "white" },
  //   { name: "completed", backgroundColor: "white" },
  // ];

  // handle DELETE
  const handleDel = (id) => {
    const ustga = window.confirm(
      "Are you sure you want to delete this task?"
    ); /*Tuhain hunees T or F utga awdag baihnee ok darwal butsaa if*/

    if (!ustga) return;

    const result = taskList.filter((task) => {
      return task.id !== id;
    });

    setTaskList(result);
  };

  // CHECK TENARY
  const handleToggle = (ID) => {
    const updatecheck = taskList.map((task) =>
      task.id === ID ? { ...task, isComplated: !task.isComplated } : task
    );
    setTaskList(updatecheck);
  };

  // FILTER LIST ["all", "active", "completed"]
  const filterTaskList = taskList.filter((task) => {
    lists.map((btn) => list === btn);
    if (list === "active" && task.isComplated === false) {
      return task;
    }
    if (list === "completed" && task.isComplated === true) {
      return task;
    }
    if (list === "all") {
      return task;
    }
  });
  console.log("FILTERED:", filterTaskList);

  // FOOTER
  // const allCount = (taskList.map((task)=>task))

  // COMPLETED COUNT
  const allCount = taskList.length;
  console.log("allCount:", allCount);

  const completedCount = taskList.filter(
    (taskComp) => taskComp.isComplated === true
  ).length;

  console.log("Completed length:", completedCount);

  // ALLComplete DELETE
  const allDelete = () => {
    const ALLCompletedDelete = taskList.filter( (task) => task.isComplated !== true);
    const delAllCompAlert = window.confirm("Are you sure you want to clear all completed tasks?")

    if(!delAllCompAlert) return
    setTaskList(ALLCompletedDelete);
  };

  return (
    <div className={style.Con}>
      <div className={style.main}>
        <h3>To-Do-List</h3>

        <Form setTaskList={setTaskList} taskList={taskList} />

        <Filter lists={lists} setList={setList} checkedList={list} />

        {filterTaskList.map((task, index) => (
          <Task
            key={index}
            task={task}
            removeTaskById={handleDel}
            toggleTaskById={handleToggle}
          />
        ))}
        {/* {filterTaskList.map(task)=> task.length===0? <NoTask /> : task} */}

        {filterTaskList.length === 0 ? <NoTask /> : null}

        {taskList.length !== 0 ? (
          <Footer
            allCount={allCount}
            completedCount={completedCount}
            allDeleteComp={allDelete}
          />
        ) : null}

        <p>Powered by <b>"L"</b> </p>
      </div>
    </div>
  );
}
