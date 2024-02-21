import React, { MouseEventHandler } from 'react'

type ButtonPropsType ={
    children : React.ReactNode
    onclick? : MouseEventHandler<HTMLButtonElement>
    classname? : string;
}

const Buttons = ({children, onclick, classname}:ButtonPropsType) => {
    const classNameButton = `px-6 py-2 rounded-lg : hover:shadow-lg transition ease-in-out duration-300 ${classname || ''}`
  return (
   <button className={classNameButton} onClick={onclick}>
    {children}
   </button> 
  )
}

export default Buttons
