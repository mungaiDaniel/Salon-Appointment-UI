import Task from "./Task"
import './addtestimony.scss'

const Tasks = ({tasks}) => {
   
  return (
    <>
      {tasks.map((task) =>(
           <Task key={task.id} task={task} />
          
         
         
      ))}
    </>
  )
}

export default Tasks