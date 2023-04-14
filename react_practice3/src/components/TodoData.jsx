import React from 'react'

const TodoData = ({id , title , handleDelete , handleToggle , completed}) => {
  return (
   <li>
    {id} -- {title} -- {completed === true? "Completed" : "Not Completed"}

    <button onClick={() => handleToggle(id)}>Toogle</button>
    <button onClick={() => handleDelete(id)}>Delete</button>
   </li>
  )
}

export default TodoData