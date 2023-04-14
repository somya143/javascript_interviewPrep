import React from 'react'

const AddTodo = ({handleClick}) => {
    const [text , setText] = React.useState("");

    let onClick = ()=> {
        handleClick(text)
    }
  return (
    <div>
        <input type="text" placeholder='Type...' value={text}  onChange={(e) => setText(e.target.value)} />
        <button onClick={onClick}>Add</button>
    </div>
  )
}

export default AddTodo