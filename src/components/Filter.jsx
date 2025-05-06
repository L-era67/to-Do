import style from "./style/Filter.module.css"

export const Filter =() =>{
    return(
        <div className={style.mainBtn}>
            <button>All</button>
            <button>Active</button>
            <button>Complicated</button>
        </div>
    )
}