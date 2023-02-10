import { useState } from "react"
import './addtestimony.scss'

const AddTask = ({onAdd}) => {
    
    const [name, setText] = useState('')
    const [comment, setDay] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please add a comment')
            return
        }
        onAdd({name, comment})

        setText('')
        setDay('')
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Full Name</label>
        <input type="text" placeholder="Add Name" value={name} onChange={(e) =>
            setText(e.target.value)
        }/>
      </div>
      <div className="form-control">
        <label>comments</label>
        <input type="text" placeholder="Add Comment" value={comment} onChange={(e) =>
            setDay(e.target.value)
        }/>
      </div>
      <input type="submit"  value="save task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask
