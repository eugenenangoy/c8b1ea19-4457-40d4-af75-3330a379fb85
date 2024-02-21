import React from 'react'

type CardsPropsType = {
    children : React.ReactNode
    classname? : string
}

const Cards = ({children, classname}:CardsPropsType) => {
  return (
    <div className={`${classname || ''} flex items-center p-2 border rounded-lg`}>
      {children}
    </div>
  )
}

export default Cards
