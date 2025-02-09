import { FaPlus } from 'react-icons/fa'
import React from 'react'

const AddItem = ({newItem, setNewItem, handleSubmmit}) => {
  return (
    <form className='addForm flex p-1' onSubmit={handleSubmmit}>
        <label htmlFor='addItem' className='hidden'>Add Item</label>
        <input
            className='border mx-1 p-2 grow rounded-full'
            autoFocus 
            type='text'
            id='addItem'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button 
            className='w-10 h-10 justify-self-center text-blue-400 p-3 hover:text-green-400 border-box border-solid border-1 align-middle rounded-full'
            type='submit'
            aria-label='Add Item'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem