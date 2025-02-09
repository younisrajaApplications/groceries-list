import React from 'react'
import { FaTrashAlt} from 'react-icons/fa';

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <>
        <div className='flex'>
        <input className= 'w-8 h-8 m-1' type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
        <label className='grow text-xl align-middle' style={(item.checked) ? {textDecoration: 'line-through'} : null }>{item.item}</label>
        <FaTrashAlt className=' w-8 h-8 m-1 inline justify-self-end text-blue-400 hover:text-red-500' role="button" tabIndex={0} onClick={() => handleDelete(item.id)}/>
        </div>
    </>
  )
}

export default LineItem