import React from 'react'

const TodoItem = ({id , title , status , handleDelete , handleToogle}) => {
  return (
    
        <>
        {title} - {status? "Completed" : "Not Completed"}
        <button onClick={() => handleToogle(id)}>toggle</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
        </>
    
  )
}

export default TodoItem