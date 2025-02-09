import ItemsList from './ItemsList';

const Content = ({items, handleCheck, handleDelete}) => {

    return (
        <main className='mb-1'>
            {items.length === 0 ? (<h1>No Items</h1>) : <ItemsList items = {items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}/>}
        </main>
  )
}

export default Content