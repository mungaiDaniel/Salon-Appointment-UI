import AddTask from './AddTestimonies'
import Header from './Header'
import Tasks from './Tasks'
import { useEffect, useState } from 'react'
import './addtestimony.scss'

const TestimonyPage = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([
    {
      "id": 1,
      "name": "Daniel Mungai",
      "comment": "Awsome and pleasant"
    },
    {
      "id": 2,
      "name": "Agnes Wanjiru",
      "comment": "Very Coparative"
    },
    {
      "name": "Hannah Mukiri",
      "comment": "Friendly enviroment and clean",
      "id": 3
    }
  ]);
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newTask = {id, ...task}
    setTask([...tasks, newTask])
  }

  return (
    <div className='containe' id='container'>
      <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        <Tasks  tasks={tasks} />
      </div>
      
       
    </div>
  )
}

export default TestimonyPage

