import AddTask from './AddTestimonies'
import Button from './Button'
import Header from './Header'
import Tasks from './Tasks'
import Task from './Task'
import { useEffect, useState } from 'react'
import './addtestimony.scss'

const TestimonyPage = () => {
    const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTask(tasksFromServer)
    }
    getTasks()
  }, [])
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }
    const addTask = async (task) => {
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()
      setTask([...tasks, data])
      // const id = Math.floor(Math.random() * 10000) + 1
      // const newTask = {id, ...task}
      // setTask([...tasks, newTask ])
    }
    const deleteTask = async(id) => {
      await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'DELETE'
      })
      setTask(tasks.filter((task) => task.id !== id))
    }
  return (
    <div className="container" id='container'>
        <Header onAdd={() => setShowAddTask(!showAddTask) } showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd = {addTask}  />}
       { tasks.length > 0 ? ( <Tasks  tasks={tasks} onDelete={deleteTask}/>) : ('No comments to show')}
       
    </div>
  )
}

export default TestimonyPage

