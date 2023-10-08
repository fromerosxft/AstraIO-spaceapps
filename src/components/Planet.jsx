import React from 'react'

function Planet() {
  return (
    <div className='w-40 h-40 bg-transparent relative z-0'>
      <div className="circle animate-moving h-40 w-full absolute z-1 rounded-full bg-repeat-x bg-cover bg-[right_0rem_top_0rem]  bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/earth.jpg')]"></div>
      {/* <img className='h-40 w-full object-cover rounded-full absolute z-1 bg-repeat-x bg-[center_top_10rem]' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/earth.jpg" alt="planeta photo"/> */}
      <div className='h-40 w-40 bg-transparent shadow-plt rounded-full absolute z-2'/>
    </div>
  )
}

export default Planet