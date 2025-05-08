export const Footer = ({allCount, completedCount}) =>{
    return(
        <div>{completedCount} of {allCount} tasks completed</div>
    )
}