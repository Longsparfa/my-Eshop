import React from 'react'

const Card = ({ children, cardClass }) => {
  return (
    <div className={` border-[1px] border-solid border-transparent rounded-[5px] --card overflow-hidden `}>{children}</div>
  )
}

export default Card