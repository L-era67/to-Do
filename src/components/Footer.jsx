export const Footer = ({allCount, completedCount, allDeleteComp}) =>{
    return(
        <div style={{display: "flex", gap:"86px"}}>
            <p>{completedCount} of {allCount} tasks completed</p>
              <button 
              style={{border:"none",
                backgroundColor:"transparent"
              }} onClick={allDeleteComp} >Clear Completed</button>
            </div>
    )
}

// if(!allcount && !completedCount){
//     return (no task yet)
// }
// return( <p>{completedCount} of {allCount} tasks completed</p>)
// ingej hiiwel allCount ba completed hoyuland filtertaskList - r hiihen