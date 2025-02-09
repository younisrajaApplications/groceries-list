import React from 'react'
import LineItem from './LineItem';

const ItemsList = ({items, handleCheck, handleDelete}) => {
  return (
    <>
        <ul>
            {items.map((item) => (
                <li className='item' key={item.id}>
                    <LineItem item = {item}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}/>
                </li>
            ))}
        </ul>
    </>
  )
}

export default ItemsList