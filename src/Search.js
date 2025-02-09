import React from 'react'

const Search = ({search , setSearch}) => {
  return (
    <>
        <form className='searchForm flex p-1' onSubmit = {(e) => e.preventDefault()}>
        <label htmlFor='searhItem' className='hidden'>Search Item</label>
        <input
            className='border mx-1 p-2 grow rounded-full mb-1'
            autoFocus 
            type='text'
            role='searchbox'
            placeholder='Search Item'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        </form>
    </>
  )
}

export default Search