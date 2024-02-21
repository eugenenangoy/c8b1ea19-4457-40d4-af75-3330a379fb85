import React from 'react'

type TagsPropsTypes = {
    tagsTitle : string
}

const Tags = ({tagsTitle}:TagsPropsTypes) => {
  return (
    <div className='flex items-center p-2 rounded-lg bg-gray-300'>
      <p className='text-white text-sm capitalize'>{tagsTitle}</p>
    </div>
  )
}

export default Tags
