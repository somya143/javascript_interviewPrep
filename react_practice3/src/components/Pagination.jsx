import React from 'react'

const Pagination = ({handlePagePrev , handlePageNext, page}) => {
    
  return (
    <div>
        <button disabled={page===1} onClick={() => handlePagePrev()}>PREV</button>
        <span>{page}</span>
        <button onClick= {() => handlePageNext()}>Next</button>
        
    </div>
  )
}

export default Pagination