import React from 'react'

function Planet() {
  return (
    <figure className='w-40 h-40 bg-transparent relative z-0'>
      <img className='h-40 w-full object-cover rounded-full absolute z-1' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/earth.jpg" alt="planeta photo"/>
      <div className='h-40 w-40 bg-transparent shadow-plt rounded-full absolute z-6'/>
    </figure>
  )
}

export default Planet