import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-around bg-purple-700 text-white p-2  '>
        <div className="logo">
          <span className='font-bold text-xl mx-9'>MYTODO</span>
        </div>
        <ul className='flex gap-10 mx-9'> 
          <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
          <li className='cursor-pointer hover:font-bold transition-all duration-75'>Your Tasks</li>
          <li></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
