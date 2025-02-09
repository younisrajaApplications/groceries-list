import React from 'react'

const Header = ({title = "Default"}) => {
  return (
    <header className='text-white bg-blue-700 text-3xl font-bold text-center py-2 mb-1'>
        <h1>{title}</h1>
    </header>
  )
}

export default Header;