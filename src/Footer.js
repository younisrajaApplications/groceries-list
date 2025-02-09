import React from 'react'

const Footer = ({length}) => {

    const today = new Date();

    return (
        <footer className='text-white bg-blue-700 text-xl font-bold text-center'>
            <p>{length} {length === 1 ? 'item' : 'items'} in the list</p>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer