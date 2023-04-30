import { FaTimes } from 'react-icons/fa'
import './addtestimony.scss'


const Task = ({ task }) => {
  return (
    <div style={{display:'flex'}}>

    <div className='task'>
      <h5> 
        {task.name}
       </h5>
      <p>{task.comment}</p>
    </div>
    <div></div>
    </div>
  )
}

export default Task