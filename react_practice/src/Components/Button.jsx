import React from 'react'

const Button = (props) => {
    let {handleClick , title} = props
  return (
    <div>
        <button onClick={handleClick}>{title}</button>
    </div>
  )
}

export default Button