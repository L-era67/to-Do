import { useState } from "react"
import style from "./style/Filter.module.css"

export const Filter =({setTaskList, taskList}) =>{

    const [all, setAll] = useState(taskList)


    // console.log("allBtn:", taskList)

    const allBtn = () =>{
        setAll(all)
    }

    // console.log("allbbtnn:", allBtn)


    const active = () =>{
        all.Filter((active)=> {
           if(!active.isComplated){

           }
        })
    }

    return(
        <div className={style.mainBtn}>
            <button onClick={allBtn}>All</button>
            <button>Active</button>
            <button>Complicated</button>
        </div>
    )
}