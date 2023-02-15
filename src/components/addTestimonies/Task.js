import { FaTimes } from 'react-icons/fa'
import './addtestimony.scss'


const Task = ({ task }) => {
  return (
    <div className='task'>
      <h3> 
        {task.name}
       </h3>
      <p>{task.comment}</p>
    </div>
  )
}

export default Task