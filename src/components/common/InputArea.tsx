import React, { ChangeEventHandler } from 'react'

type InputAreaPropsType = {
    name? : string
    value? : string
    onchange? : ChangeEventHandler<HTMLInputElement>
    placeholder? : string
    classname? : string
    disabled? : boolean
    type? :string
    required? :boolean
}

const InputArea = ({name,value,onchange,placeholder,classname,disabled,type,required}:InputAreaPropsType) => {
  return (
    <input type={type} disabled={disabled} name={name} value={value} className={`bg-secondary p-5 placeholder:text-gray-400 rounded-lg outline-none w-full ${classname}`} placeholder={placeholder} required={required} onChange={onchange}/>
  )
}

export default InputArea
