import React from 'react'

const Button = ({name}) => {
  
    return (
    <button className='bg-gray-400 px-4 py-1 m-2 rounded-lg'>
        {name}
    </button>
  )
}

export default Button