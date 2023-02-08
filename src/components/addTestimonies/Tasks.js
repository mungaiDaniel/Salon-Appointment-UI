import Task from "./Task"
import './addtestimony.scss'

const Tasks = ({tasks, onDelete}) => {
   
  return (
    <>
      {tasks.map((task, index) =>(
          <Task key={index} task={task}  onDelete={onDelete}/>
         
      ))}
    </>
  )
}

export default Tasks