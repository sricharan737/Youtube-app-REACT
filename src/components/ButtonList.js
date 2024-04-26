import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All", "Gaming", "Music", "Football", "Live", "News","Music", "Football", "Live", "News","Music", "Football", "Live", "News"];
  return (
    <div className='mt-20 fixed bg-white w-full ml-32'>
      {list.map((x,index) => (
        <Button key={index} name={x} />
      ))}
    </div>
  );
}

export default ButtonList